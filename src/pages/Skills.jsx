import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiR, SiTableau } from "react-icons/si";
import { TbChartBar } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { MdDataObject } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skills = [
    { icon: <FaPython className="text-blue-500 text-8xl" />, name: "Python" },
    { icon: <FaJava className="text-red-500 text-8xl" />, name: "Java" },
    { icon: <FaJs className="text-yellow-400 text-8xl" />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-orange-500 text-8xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-400 text-8xl" />, name: "CSS" },
    { icon: <SiR className="text-sky-600 text-8xl" />, name: "R" },
    { icon: <SiTableau className="text-blue-700 text-8xl" />, name: "Tableau" },
    { icon: <TbChartBar className="text-yellow-500 text-8xl" />, name: "Power BI" },
  ];

  const services = [
  {
    icon: <MdDataObject className="text-stone-800 text-6xl mb-4" />,
    title: "Data Engineering",
    description:
      "Transforming raw, unstructured data into structured, reliable datasets through cleaning and feature engineering.",
  },
  {
    icon: <AiOutlineFundProjectionScreen className="text-stone-800 text-6xl mb-4" />,
    title: "Data Science",
    description:
      "Leveraging machine learning to predict trends, build algorithms, and uncover insights.",
  },
  {
    icon: <FaChartBar className="text-stone-800 text-6xl mb-4" />,
    title: "Data Analytics & Visualization",
    description:
      "Presenting clear, actionable insights through compelling visuals for clients.",
  },
];

  return (
    <>
      {/* Skills Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-stone-800 mb-7"
          style={{ fontFamily: "satoshi-black" }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
        >
          I work across a broad tech stack spanning across data engineering, analytics and web development.
          From building efficient data pipelines to developing responsive websites and dynamic dashboards, I deliver high-impact, data-driven results.
        </motion.p>

        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent className="flex items-center">
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 md:basis-1/6 flex flex-col items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  {skill.icon}
                  <p
                    className="mt-2 text-sm"
                    style={{ fontFamily: "satoshi-medium" }}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-stone-800 mb-6"
            style={{ fontFamily: "satoshi-black" }}
          >
            What Can I Do
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-rose-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {service.icon}
                <h5
                  className="mb-3 text-lg md:text-xl text-stone-800"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {service.title}
                </h5>
                <p
                  className="text-zinc-600"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;