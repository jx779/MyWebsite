import React from "react";
import myImg from '../assets/pfp.jpg';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col -mt-10 md:flex-row items-center justify-center px-8 md:px-30 py-16 bg-white">

      {/* Left: Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={myImg}
          alt="Siah Jia Xuan"
          className="w-90 md:w-94 h-90 md:h-94 object-cover border-7 border-stone-900 rounded-full shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl mb-4 text-stone-800"
          style={{ fontFamily: 'satoshi-black' }}
        >
          About Me
        </h2>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          Hi! I'm Siah Jia Xuan, a{" "}
          <span className="font-semibold text-stone-800">Business Analytics</span>{" "}
          student at NUS with a minor in Quantitative Finance. I am currently pursuing a double specialisation in{" "}
          <span className="underline decoration-rose-300 decoration-2 underline-offset-2">Machine Learning</span>{" "}
          and{" "}
          <span className="underline decoration-rose-300 decoration-2 underline-offset-2">Finance</span>.
        </p>

        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          I have a passion for turning complex data into clear, actionable insights. I enjoy working across
          the data stack — from engineering pipelines to analysing trends and visualising results — to support
          smarter, data-driven decision-making.
        </p>

        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          I'm continuously learning and exploring new tools and frameworks to improve my skills. Beyond coding,
          I am involved in various leadership roles and initiatives in NUS such as being a part of Eusoff Hall
          Promotion Board and Hall Relations Board. I am also a Basketball and Volleyball player.
        </p>
      </motion.div>
    </section>
  );
};

export default About;