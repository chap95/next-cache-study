import { customFetch } from "@/utils/api";
import ClientComponent from "./ClientComponent";

const ServerComponent = () => {
  const pokemonPromise = customFetch("/pokemon/ditto");

  return (
    <div>
      <ClientComponent pokemonPromise={pokemonPromise} />
    </div>
  );
};

export default ServerComponent;
