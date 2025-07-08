import React from "react";

type NumberedItemProps = {
  number: number;
  title: string;
  description: string;
  className?: string;
};

const NumberedItem: React.FC<NumberedItemProps> = ({
  number,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-white relative rounded-2xl p-4 flex items-center gap-4 w-full ${className}`}
    >
      <div className="text-[#e5a373] text-2xl font-bold">{number}</div>
      <p className="text-[#0c0e10] leading-6">
        <span className="text-lg font-bold">{title}</span>{" "}
        <span className="text-base">{description}</span>
      </p>
    </div>
  );
};

export default NumberedItem;
