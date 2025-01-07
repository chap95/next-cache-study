import { customFetch } from "@/utils/api";

const DetailComponent = async ({ id }: { id: string }) => {
  const data = await customFetch("/pokemon/ditto", {
    next: {
      tags: ["/pokemon/ditto", id],
    },
  });

  console.log(data);
  return (
    <div>
      <h1>{id} 의 상세 페이지 입니다.</h1>
    </div>
  );
};

export default DetailComponent;
