"use client";

import { ReactNode } from "react";

const CustomClientButton = <T,>({
  children,
  className = "",
  onClick: handleClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => T;
}) => {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomClientButton;
