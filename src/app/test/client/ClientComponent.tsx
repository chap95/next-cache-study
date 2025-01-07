/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { use } from "react";

const ClientComponent = ({
  pokemonPromise,
}: {
  pokemonPromise: Promise<any>;
}) => {
  const pokemon = use(pokemonPromise);

  console.log(pokemon);
  return (
    <div>
      <Link href="/test/client/1">Detail Page No. 1</Link>
    </div>
  );
};

export default ClientComponent;
