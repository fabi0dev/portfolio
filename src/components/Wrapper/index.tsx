import { motion } from "framer-motion";

interface IWrapper {
  children: React.ReactElement;
  name: string;
}
export const Wrapper = ({ children, name }: IWrapper): JSX.Element => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="absolute">
        <span id={name}></span>
      </div>

      {children}
    </motion.section>
  );
};
