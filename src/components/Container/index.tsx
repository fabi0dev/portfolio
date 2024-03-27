import React from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}
export const Container = ({ children, className, ...props }: IContainer) => {
  return (
    <div
      className={` px-9 sm:px-16  sm:py-16 py-10 max-w-7xl mx-auto relative z-0  ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
