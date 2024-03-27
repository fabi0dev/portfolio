import clsx from "clsx";
import { FC } from "react";
import { FaReact } from "react-icons/fa6";

interface IconTechnologyProps {
  icon: string;
}

interface ContentProps {
  children: React.ReactNode;
  className: string;
}

export const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "h-10 w-10 rounded-xl bg-slate-950 flex items-center justify-center shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const IconTechnology: FC<IconTechnologyProps> = ({ icon }) => {
  return (
    <div>
      {icon == "ReactNative" && (
        <Content className={"shadow-cyan-400 bg-slate-900"}>
          <FaReact className={`text-cyan-400 w-8 h-8 `} />
        </Content>
      )}
      {icon == "ReactJS" && (
        <Content className={"shadow-blue-500"}>
          <FaReact className={`text-blue-500 w-8 h-8 `} />
        </Content>
      )}
    </div>
  );
};
