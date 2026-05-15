/** Chicago/AP-style title case for MainTextBlock headings. */

const SMALL_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "but",
  "or",
  "for",
  "nor",
  "on",
  "at",
  "to",
  "from",
  "by",
  "of",
  "in",
  "with",
  "as",
  "vs",
  "via",
]);

/** Multi-word phrases checked before single-word tokens (longest first). */
const PRESERVE_PHRASES: string[] = ["The Muse"];

/** Single-token canonical casing (lowercase key → display form). */
const PRESERVE_TOKENS: Record<string, string> = {
  ai: "AI",
  mvp: "MVP",
  ia: "IA",
  ui: "UI",
  ux: "UX",
  jdp: "JDP",
  "a/b": "A/B",
  wysiwyg: "WYSIWYG",
  api: "API",
  wb: "WB",
  fgb: "FGB",
  "2.0": "2.0",
};

function capitalizeSegment(segment: string): string {
  if (!segment) return segment;
  const lower = segment.toLowerCase();
  if (PRESERVE_TOKENS[lower] !== undefined) {
    return PRESERVE_TOKENS[lower];
  }
  return segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase();
}

function capitalizeWord(word: string, forceCapitalize: boolean): string {
  const leadingPunct = word.match(/^([("'[\{]*)/)?.[1] ?? "";
  const trailingPunct = word.match(/([)"'.,!?…:;\}\]]*)$/)?.[1] ?? "";
  let core = word.slice(
    leadingPunct.length,
    word.length - trailingPunct.length,
  );

  if (!core) return word;

  if (core.includes("-")) {
    core = core
      .split("-")
      .map((part) => capitalizeSegment(part))
      .join("-");
  } else {
    const coreLower = core.toLowerCase();
    if (PRESERVE_TOKENS[coreLower] !== undefined) {
      core = PRESERVE_TOKENS[coreLower];
    } else if (forceCapitalize || !SMALL_WORDS.has(coreLower)) {
      core = capitalizeSegment(core);
    } else {
      core = coreLower;
    }
  }

  return leadingPunct + core + trailingPunct;
}

function findPreservedPhrase(
  words: string[],
  startIndex: number,
): { phrase: string; length: number } | null {
  const tail = words.slice(startIndex).join(" ");
  const sorted = [...PRESERVE_PHRASES].sort((a, b) => b.length - a.length);

  for (const phrase of sorted) {
    const pattern = new RegExp(
      `^${phrase.replace(/\s+/g, "\\s+")}(?=\\s|$)`,
      "i",
    );
    const match = tail.match(pattern);
    if (match) {
      const length = match[0].trim().split(/\s+/).length;
      return { phrase, length };
    }
  }
  return null;
}

/**
 * Converts a string to Chicago/AP title case.
 * First and last words are always capitalized; short words stay lowercase in the middle.
 */
export function toTitleCase(input: string): string {
  const normalized = input.trim().replace(/\s+/g, " ");
  if (!normalized) return normalized;

  const words = normalized.split(" ");
  const result: string[] = [];

  for (let i = 0; i < words.length; ) {
    const preserved = findPreservedPhrase(words, i);
    if (preserved) {
      result.push(preserved.phrase);
      i += preserved.length;
      continue;
    }

    const isFirst = i === 0;
    const isLast = i === words.length - 1;
    const forceCapitalize = isFirst || isLast;

    result.push(capitalizeWord(words[i], forceCapitalize));
    i += 1;
  }

  return result.join(" ");
}
