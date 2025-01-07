/* eslint-disable @typescript-eslint/no-unused-expressions */
import { revalidateTag } from "next/cache";
import DetailComponent from "./DetailComponent";
import CustomClientButton from "@/components/client/ClientButton";

const ClientDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const handleRevalidate = async () => {
    "use server";

    revalidateTag(id);
  };

  return (
    <div>
      <DetailComponent id={id} />
      <CustomClientButton<void>
        className="px-[1rem] py-[1rem] border-[0.1rem] rounded-[1rem]"
        onClick={handleRevalidate}
      >
        Revalidate
      </CustomClientButton>
    </div>
  );
};

export default ClientDetailPage;
