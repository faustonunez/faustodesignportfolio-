export interface ListItem {
  title: string;
  text: React.ReactNode; // Allow text to accept React elements
}

export interface HorizontalCardProps {
  title: React.ReactNode;
  smallText: React.ReactNode; // Ensure that smallText is not bolded by default
  date?: React.ReactNode; // Flush right; when provided, shown in same row as smallText
  description: React.ReactNode;
  listItems?: ListItem[];
  showList?: boolean;
}

const subtitleClass = "mb-4 text-brand-secondary-40";

export function ResumeTextBlock({
  title,
  smallText,
  date,
  description,
  listItems = [],
  showList = false,
}: HorizontalCardProps) {
  return (
    <div className="mb-10">
      <div id="content">
        <h5 className="mb-1 font-bold">{title}</h5>
        <div className="flex justify-between items-baseline gap-4">
          <p className={subtitleClass}>{smallText}</p>
          {date != null && <p className={subtitleClass + " text-right shrink-0"}>{date}</p>}
        </div>
        {/* <p>{description}</p> */}
      </div>
      {/*showList && listItems.length > 0 && (
        <ul className="list-disc pl-12 text-[16px] mt-4">
          {listItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> {item.text}
            </li>
          ))}
        </ul>
      )*/}
      <hr className="mt-10 border-t border-gray-200" />
    </div>
  );
}
