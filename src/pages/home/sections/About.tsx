import { Container, Wrapper } from "../../../components";
import { Services } from ".";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <Wrapper name="about">
      <Container>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
          }}
        >
          <h1
            className="font-bold text-emerald-500
              text-4xl
              md:text-3xl
              sm:text-6xl inline 
              bg-gradient-to-r bg-clip-text font-display  tracking-tight text-transparent"
          >
            Sobre mim
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            Um desenvolvedor de software qualificado em TypeScript e JavaScript,
            com experiência na construção de interfaces modernas e responsivas,
            tanto para aplicações web quanto mobile, por meio do uso de
            frameworks como React e React Native. Aprendo rápido e colaboro
            estreitamente com os clientes para criar soluções eficientes,
            escaláveis e fáceis de usar. Vamos trabalhar juntos para dar vida às
            suas ideias!
          </p>
        </motion.div>

        <Services />
      </Container>
    </Wrapper>
  );
};
