import {
  type ReactNode,
  type KeyboardEvent,
  useCallback,
  useId,
} from "react";
import { clsx } from "clsx";

export type ToggleOption = {
  value: string;
  label: string;
  /** Below `md`: shown next to icon. If omitted, `label` is used. */
  shortLabel?: string;
  icon?: ReactNode;
};

export interface ToggleProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
  className?: string;
  /** First tab's `aria-controls` target id */
  panelId0: string;
  /** Second tab's `aria-controls` target id */
  panelId1: string;
  /** When set, used for stable `id` / `aria-labelledby` wiring. */
  tabIds?: readonly [string, string];
}

export function Toggle({
  options,
  value,
  onChange,
  ariaLabel,
  className,
  panelId0,
  panelId1,
  tabIds,
}: ToggleProps) {
  const baseId = useId();
  const panelIds = [panelId0, panelId1];

  const selectIndex = useCallback(
    (i: number) => {
      const opt = options[i];
      if (opt) onChange(opt.value);
    },
    [onChange, options],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = options.findIndex((o) => o.value === value);
    if (i < 0) return;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown": {
        e.preventDefault();
        selectIndex((i + 1) % options.length);
        break;
      }
      case "ArrowLeft":
      case "ArrowUp": {
        e.preventDefault();
        selectIndex((i - 1 + options.length) % options.length);
        break;
      }
      case "Home": {
        e.preventDefault();
        selectIndex(0);
        break;
      }
      case "End": {
        e.preventDefault();
        selectIndex(options.length - 1);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
        className={clsx(
        "inline-flex w-full max-w-md sm:w-auto rounded-2xl border border-black/10 dark:border-white/15 bg-brand-tertiary-10 dark:bg-[#1b1d27] p-1",
        "motion-reduce:transition-none transition-[box-shadow] duration-150",
        className,
      )}
    >
      {options.map((opt, index) => {
        const selected = opt.value === value;
        const tabId = tabIds?.[index] ?? `${baseId}-tab-${index}`;
        const controlsId = panelIds[index] ?? panelIds[0];
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            id={tabId}
            aria-selected={selected}
            aria-controls={controlsId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(opt.value)}
            className={clsx(
              "flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 md:flex-initial md:px-4",
              "text-sm font-lato font-medium text-brand-secondary-60 dark:text-[#B8DDF2]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-outline dark:focus-visible:ring-brand-secondary-40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-tertiary-10 dark:focus-visible:ring-offset-[#1b1d27]",
              "motion-reduce:transition-none transition-colors duration-150",
              selected &&
                "bg-brand-primary-20 dark:bg-brand-secondary-80-bg text-brand-secondary-100-text dark:text-white shadow-sm",
              !selected && "hover:bg-brand-greys-0/80 dark:hover:bg-white/5",
            )}
          >
            {opt.icon ? (
              <span className="shrink-0 [&_svg]:size-4" aria-hidden>
                {opt.icon}
              </span>
            ) : null}
            <span
              className={clsx(
                "sm:inline md:hidden",
                opt.icon ? "max-sm:sr-only" : "max-sm:inline",
              )}
            >
              {opt.shortLabel ?? opt.label}
            </span>
            <span className="hidden md:inline">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
