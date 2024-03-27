import { useEffect } from "react";
import { bubbleParticles } from "../../scripts/particles";
import { motion } from "framer-motion";

export default function Page404() {
  useEffect(() => {
    const particles = bubbleParticles("#hero-particles");
    particles.start();
  }, []);

  return (
    <>
      <div className="isolate bg-slate-950">
        <div className="h-lvh w-full flex justify-center ">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className="mt-32 "
          >
            <img className="w-48 mx-auto" src="/assets/img/404.png" />
            <div className="mt-10 font-semibold text-slate-400 text-3xl">
              Ah não, deu ruim...
            </div>
            <div className="mt-4 text-slate-400">
              Você está tentando encontrar algo que não existe aqui.
            </div>

            <div className="mt-9 text-center text-slate-400">
              <a
                className="hover:text-slate-300 hover:border-slate-300 border-slate-400 border rounded-lg py-2 px-3"
                href="/"
                id="go-to-home"
              >
                Página inicial
              </a>
            </div>
          </motion.div>
        </div>

        <canvas
          className="absolute top-0 -z-50 w-full"
          id="hero-particles"
        ></canvas>
      </div>
    </>
  );
}
