import { Container, Header } from "../../components";
import { projects } from "../../constants/projects";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpo } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { SlSocialGithub } from "react-icons/sl";
import { motion } from "framer-motion";
import { IconTechnology } from "./Wrappers";
import { FaEye } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="min-h-lvh bg-slate-950">
      <Header />

      <Container>
        <div className="mt-10">
          <h1 className="text-2xl text-gray-200 font-bold">
            Galeria de Projetos
          </h1>
          <h2 className="text-base text-gray-400 mt-3">
            Aqui estão alguns projetos pessoais em que ocupei tempo
          </h2>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 ">
            {projects.map(
              ({ title, icon, descr, techs, github, deploy }, key) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        delay: key * 0.2,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }}
                    key={key}
                    className="rounded-md bg-slate-900 flex flex-col flex-1 w-full p-6 opacity-70 hover:opacity-100 min-h-[250px]"
                  >
                    <div className="w-full items-center">
                      <div className="relative w-[72px] h-[68px]">
                        <IconTechnology icon={icon} />
                      </div>

                      <div>
                        <p
                          className="mt-1 line-clamp-3 text-base font-bold text-gray-100 leading-snug"
                          title={title}
                        >
                          {title}
                        </p>

                        <h4 className="text-[10px] text-gray-300 tracking-wider mt-2">
                          <span className="uppercase">{descr}</span>
                        </h4>
                      </div>

                      <div className="mt-4 flex">
                        {techs
                          .split(",")
                          .sort()
                          .map((tech) => {
                            return (
                              <button className="items-center font-medium text-[10px] text-slate-400 border border-slate-700 px-4 py-1 rounded-2xl uppercase mr-2 flex cursor-default">
                                {tech.trim() == "TypeScript" && (
                                  <BiLogoTypescript className="w-4 h-4 mr-2 text-cyan-600" />
                                )}

                                {tech.trim() == "Expo" && (
                                  <SiExpo className="w-3 h-3 mr-2 text-slate-100" />
                                )}

                                {tech.trim() == "Vite" && (
                                  <SiVitest className="w-3 h-3 mr-2 text-yellow-400" />
                                )}

                                {tech}
                              </button>
                            );
                          })}
                      </div>

                      <div className="flex mt-6 justify-center gap-x-3">
                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            className="text-[12px] text-slate-400 flex items-center px-3 py-1 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800"
                            title="Repositório no GitHub"
                          >
                            <SlSocialGithub className="w-3 h-3 mr-2" />
                            GitHub
                          </a>
                        )}

                        {deploy != "" && (
                          <a
                            href={deploy}
                            target="_blank"
                            title="Deploy no vercel"
                            className="text-[12px] text-slate-400 flex items-center px-3 py-1 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800"
                          >
                            <FaEye className="w-3 h-3 mr-2" />
                            Deploy
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
