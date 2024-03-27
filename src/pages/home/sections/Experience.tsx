import { Wrapper } from "../../../components";
import { motion } from "framer-motion";
import { Container } from "../../../components/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../../constants/experiences";

export const Experience = () => {
  return (
    <Wrapper name="experience">
      <Container>
        <motion.div
          variants={{
            hidden: {
              y: -50,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.25,
              },
            },
          }}
        >
          <p
            className={`sm:text-[18px] text-[14px] text-secondary text-center`}
          >
            Jornada Profissional
          </p>
          <h2
            className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
          >
            Experiências
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col ">
          <VerticalTimeline>
            {experiences.map(
              (
                {
                  detailsColor,
                  date,
                  iconBg,
                  icon,
                  companyName,
                  title,
                  points,
                },
                key
              ) => (
                <VerticalTimelineElement
                  key={key}
                  contentStyle={{
                    background: "#111827",
                    color: "#eee",
                    borderTop: `4px solid ${detailsColor} `,
                  }}
                  contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
                  date={date}
                  iconStyle={{
                    background: iconBg,
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={icon}
                        alt={companyName}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                >
                  <div>
                    <h3 className="text-white text-[24px] font-bold">
                      {title}
                    </h3>
                    <p
                      className="text-secondary text-[16px] font-semibold"
                      style={{ margin: 0 }}
                    >
                      {companyName}
                    </p>
                  </div>

                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    {points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              )
            )}
          </VerticalTimeline>
        </div>
      </Container>
    </Wrapper>
  );
};
