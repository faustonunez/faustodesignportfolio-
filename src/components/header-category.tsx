export function HeaderCat({
  Title,
  Description,
}: {
  Title: string;
  Description: string;
}) {
  return (
    <div className=" w-full flex justify-center">
      <div className="flex flex-col gap-5 w-[50%] text-center">
        <h1>{Title}</h1>
        <p>{Description}</p>
      </div>
    </div>
  );
}
