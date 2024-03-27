import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Container, Wrapper } from "../../../components";
import { highlights, skills } from "../../../constants/services";

export const Services = () => {
  return (
    <Wrapper name="about">
      <Container>
        <div className="text-center">
          <div>
            <h1 className="text-3xl font-extrabold">Principais Skills</h1>
            <hr className="divider mx-auto bg-warning border-warning border-green-600 w-10 my-8"></hr>
            <h2 className="text-xl text-slate-300">
              Habilidades em que faço a diferença
            </h2>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-8 justify-between">
          {highlights.map(({ icon, title, sub }, index) => (
            <Tilt className="w-full sm:w-[calc(100vh/3)]" key={index}>
              <motion.div
                variants={{
                  hidden: {
                    y: 100,
                    opacity: 0,
                  },
                  show: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      delay: index * 0.2,
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="w-full rounded-md bg-gradient-to-r from-[#7ffff9] to-[#7d4eff] p-[1px]"
              >
                <div className="bg-[rgba(0,0,0, .1)] rounded-md py-5 px-12 min-h-[230px] flex justify-center items-center flex-col h-full w-full bg-gray-900">
                  <img
                    src={icon}
                    alt="web-development"
                    className="w-20 h-20 object-contain"
                  />

                  <div className="mt-2 text-slate-500 text-sm">{sub}</div>
                  <div className="text-white text-2xl font-bold text-center">
                    {title}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <div className="mt-14 mb-4">
          <h1 className="font-bold">Tecnologias e Ferramentas</h1>
        </div>

        <div className="justify-normal gap-2 flex flex-wrap ">
          {skills.sort().map(({ name, url }, index) => (
            <motion.a
              key={index}
              variants={{
                hidden: {
                  x: -100,
                  opacity: 0,
                },
                show: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              href={url}
              target="_blank"
              className="px-6 py-2 bg-slate-800 rounded-3xl text-nowrap text-center shadow-md"
            >
              {name}
            </motion.a>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};
