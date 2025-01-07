import { customFetch } from "@/utils/api";

const SomeComponent = async () => {
  const data = await customFetch("/pokemon/ditto", {
    next: {
      revalidate: 1000,
    },
  });

  return <div></div>;
};

export default SomeComponent;
