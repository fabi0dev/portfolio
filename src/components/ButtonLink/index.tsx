import { motion } from "framer-motion";
import React from "react";

interface IButtonLink {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}
export const ButtonLink = ({
  href,
  children,
  className = "",
  ...props
}: IButtonLink) => {
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      className={`grid grid-cols-2 items-center 
      rounded-md bg-slate-100 px-3.5 py-2.5 text-sm 
      font-semibold text-black shadow-sm 
      hover:bg-slate-300
       ${className}
      items-center w-auto`}
      {...props}
    >
      {children}
    </motion.a>
  );
};
