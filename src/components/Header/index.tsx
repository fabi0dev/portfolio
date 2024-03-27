import { useEffect, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

import {
  useMotionValueEvent,
  useScroll,
  motion,
  animate,
  stagger,
} from "framer-motion";

export const Header = () => {
  const [viewMobile, setViewMobile] = useState(false);
  const { scrollY } = useScroll();
  const [scrollYPos, setScrollYPos] = useState(0);
  const [classHeader, setClassHeader] = useState("absolute");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYPos(latest);

    if (scrollYPos > 50) {
      if (window.scrollY <= scrollYPos) {
        setClassHeader("fixed backdrop-blur-3xl shadow-md");
        animate("#content-header", { opacity: 1 }, { duration: 0.2 });
      } else {
        animate("#content-header", { opacity: 0 }, { duration: 0.2 });
        setTimeout(() => {
          setClassHeader(`absolute`);
        }, 200);
      }
    } else {
      setClassHeader(`absolute`);
    }
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (viewMobile == true) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [viewMobile]);

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      ".item-menu-mobile",
      viewMobile
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.4, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: viewMobile ? staggerMenuItems : 0,
      }
    );
  }, [viewMobile, staggerMenuItems]);

  const itemsLink = [
    {
      descr: "Sobre",
      url: "/#about",
    },
    {
      descr: "Experiência",
      url: "/#experience",
    },
    {
      descr: "Projetos",
      url: "/projects",
    },
  ];

  return (
    <>
      <motion.header
        id="content-header"
        className={`inset-x-0 top-0 z-40 ${classHeader} `}
      >
        <nav
          className="flex items-center justify-center p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex w-11/12 lg:w-4/5 justify-between items-center">
            <div className="font-bold text-xl">
              <a href="/">
                {"<"}fabio.<span className="text-emerald-400">alves</span>{" "}
                {"/>"}
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {itemsLink.map((item, key) => (
                <a
                  key={key}
                  href={item.url}
                  className="font-semibold leading-6 text-gray-100 hover:bg-slate-700 px-4 py-1 rounded-3xl"
                >
                  {item.descr}
                </a>
              ))}
            </div>

            <div className="sm:hidden">
              <a onClick={() => setViewMobile(true)}>
                <HiMiniBars3BottomRight className="w-9 h-9" />
              </a>
            </div>
          </div>
        </nav>
      </motion.header>

      <div className={`${!viewMobile ? "hidden" : ""} z-50 h-lvh`}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
            },
          }}
          animate={!viewMobile ? "hidden" : "show"}
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setViewMobile(false)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="#eee"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {itemsLink.map((item, key) => (
                  <a
                    key={key}
                    href={item.url}
                    onClick={() => setViewMobile(false)}
                    className="item-menu-mobile -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100"
                  >
                    {item.descr}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={{
          visible: { opacity: 1, y: 0, filter: "" },
          hidden: { opacity: 0, y: -35, filter: "blur(5px)" },
        }}
        animate={scrollYPos > 50 ? "visible" : "hidden"}
        className={`fixed right-7 bottom-10 z-50 opacity-0`}
      >
        <a href="#profile" title="Voltar ao topo">
          <RxDoubleArrowUp className="w-7 h-7 hover:text-slate-400 text-white" />
        </a>
      </motion.div>
    </>
  );
};
