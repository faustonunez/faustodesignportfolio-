export interface ListItem {
  title: string;
  text: string;
}

export interface HorizontalCardProps {
  title: React.ReactNode;
  smallText: React.ReactNode; // Ensure that smallText is not bolded by default
  description: React.ReactNode;
  listItems?: ListItem[];
  showList?: boolean;
}

export function ResumeTextBlock({
  title,
  smallText,
  description,
  listItems = [],
  showList = false,
}: HorizontalCardProps) {
  return (
    <div className="mb-10">
      <div id="content">
        <h5 className="mb-1 font-bold">{title}</h5>
        <p className="mb-4 text-brand-secondary-40">{smallText}</p>{" "}
        {/* smallText is not bolded */}
        <p>{description}</p>
      </div>
      {showList && listItems.length > 0 && (
        <ul className="list-disc pl-12 text-[16px] mt-4">
          {listItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> {item.text}
            </li>
          ))}
        </ul>
      )}
      <hr className="mt-10 border-t border-gray-200" />
    </div>
  );
}
