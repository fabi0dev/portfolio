import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ButtonLink, Wrapper } from "../../../components";
import { Figures } from "../figures";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toast } from "flowbite-react";
import {
  selectorToasts,
  setWelcomeCV,
  setWelcomeLinkedIn,
} from "../../../store/reducers/toasts";
import { useDispatch, useSelector } from "react-redux";
import { bubbleParticles } from "../../../scripts/particles";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdOutlineMultipleStop } from "react-icons/md";

export const Profile = () => {
  const dispatch = useDispatch();
  const { welcomeLinkedIn, welcomeCV } = useSelector(selectorToasts);
  const { scrollY } = useScroll();
  const [hiddenMouseInfo, setHiddenMouseInfo] = useState(false);
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setHiddenMouseInfo(true);
    } else {
      setHiddenMouseInfo(false);
    }
  });

  useEffect(() => {
    const particles = bubbleParticles("#hero-particles");
    particles.start();
  }, []);

  const BlurBgColors = () => {
    return (
      <>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8400ff] to-[#00ff6a] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div
          className="absolute inset-x-0 top-[calc(90%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl 
          sm:top-[calc(70%-30rem)] md:top-[calc(45%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#02d9ff] to-[#02272e] opacity-30 sm:left-[calc(95%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </>
    );
  };

  return (
    <Wrapper name="profile">
      <div className="isolate bg-slate-950 ">
        <BlurBgColors />
        <div className="h-lvh overflow-hidden sm:h-auto">
          <div className="h-lvh sm:h-auto mx-auto max-w-7xl">
            <motion.div
              className="justify-center flex mt-44"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              whileTap={{
                scale: 2,
              }}
            >
              <div
                className="rounded-full w-36 h-36 md:w-40 md:h-40 shadow-md bg-cover"
                style={{ backgroundImage: "url(assets/img/profile.jpg)" }}
              ></div>
            </motion.div>

            <motion.div
              className="text-center "
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className={`font-black text-white text-[35px] sm:text-[55px] lg:text-[58px]  xs:text-[50px] lg:leading-[98px] mt-2`}
              >
                Olá, eu sou o{" "}
                <span className=" bg-gradient-to-r from-green-300 via-emerald-500 to-green-400 bg-clip-text tracking-tight text-transparent">
                  Fábio!
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5 }}
              className={`text-slate-50 font-medium sm:text-xl text-center`}
            >
              Desenvolvedor Pleno Full Stack <br />
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <div>
                <ButtonLink target="_blank" href="https://github.com/fabi0dev">
                  <RxGithubLogo className="w-4 h-4" />
                  Github
                </ButtonLink>
              </div>

              {(from !== "linkedin" && from == null) ||
                (from == "cv" && (
                  <ButtonLink
                    target="_blank"
                    href="https://www.linkedin.com/in/fabio-alv3s/"
                  >
                    <BsLinkedin className="w-4 h-4" />
                    Linkedin
                  </ButtonLink>
                ))}
            </motion.div>

            {!welcomeLinkedIn && from == "linkedin" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Toast className="bg-slate-800">
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
                    <PiGithubLogoFill className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal text-slate-200">
                    Que bom você ter me encontrado no LinkedIn, talvez você
                    também queira dar uma olhada no meu GitHub...
                  </div>
                  <Toast.Toggle
                    onClick={() => dispatch(setWelcomeLinkedIn(true))}
                    className="bg-transparent"
                  />
                </Toast>
              </motion.div>
            )}

            {!welcomeCV && from == "cv" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Toast className="bg-slate-800">
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-500">
                    <MdOutlineMultipleStop className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal text-slate-200">
                    Fico feliz com a sua visita para conhecer mais sobre mim,
                    talvez você também queira dar uma olhada no meu LinkedIn...
                  </div>
                  <Toast.Toggle
                    onClick={() => dispatch(setWelcomeCV(true))}
                    className="bg-transparent"
                  />
                </Toast>
              </motion.div>
            )}
          </div>

          <div className="hidden sm:block">
            <Figures />
          </div>

          <canvas
            className="absolute top-0 -z-50 w-full"
            id="hero-particles"
          ></canvas>
        </div>

        <motion.div
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0)" },
            hidden: { opacity: 0, y: -25, filter: "blur(5px)" },
          }}
          animate={hiddenMouseInfo ? "hidden" : "visible"}
          className="content-mouse-info "
        >
          <div className="hidden sm:block">
            <a href="#about">
              <div className="mouse-icon">
                <div className="scroller"></div>
              </div>
            </a>
          </div>

          <div className="sm:hidden up-down-mobile  ">
            <div className=" h-8 w-8 bg-black opacity-50 mx-auto border rounded-3xl"></div>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
};
