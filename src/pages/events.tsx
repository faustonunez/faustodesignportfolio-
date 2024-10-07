import { HeaderCat } from "@/components/header-category";

export function Events() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex-col justify-center">
        <HeaderCat
          Title={"Events"}
          Description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
      </div>
    </div>
  );
}
