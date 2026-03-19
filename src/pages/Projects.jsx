import React from "react";
import pingMeImg from "../assets/PingMeIcon.png";
import breakieImg from "../assets/BreakieIcon.png";
import datathonImg from "../assets/Datathon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "PingMe – Location-Based Reminder App",
      description:
        "A cross-platform mobile app that triggers reminders based on your location. Features secure user authentication, cloud data management via Firebase, Google Maps API integration, Expo Push Notifications, and Gemini 2.0 Flash AI.",
      image: pingMeImg,
      isCover: false,
      repoLink: "https://github.com/jx779/orbital",
      projectPage: "/projects/pingme",
      tech: ["React Native", "Firebase", "Google Maps API", "Gemini AI", "Expo"],
    },
    {
      title: "Breakie – Gamified Chrome Extension",
      description:
        "A gamified Chrome extension that tracks focus sessions, breaks, and in-game rewards to encourage consistent study habits. Features 2-player mini-games, timer logic, and progress tracking.",
      image: breakieImg,
      isCover: false,
      repoLink: "https://github.com/jx779/hack-and-roll",
      projectPage: "/projects/breakie",
      tech: ["HTML", "CSS", "JavaScript", "Chrome Extensions API"],
    },
    {
      title: "NUS Datathon – AI Analytics Prototype",
      description:
        "An AI-driven analytics prototype built for the NUS Datathon that extracts actionable insights from company-level data. Involved data cleaning, preprocessing, feature engineering, and LLMs to generate business summaries.",
      image: datathonImg,
      isCover: true,
      repoLink: null,
      projectPage: "https://docs.google.com/document/d/1omE1LkNlLBZnlyiZ32HrW0E_sI-mUgf43tGplETgzNM/edit?tab=t.0#heading=h.hm0fgas91qi",
      tech: ["Python", "Machine Learning", "LLMs", "Pandas", "NLP"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-stone-800 mb-6"
          style={{ fontFamily: "satoshi-black" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base"
          style={{ fontFamily: "satoshi-medium" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I've worked on, showcasing my skills in
          mobile development, data analytics, and software engineering.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project image / logo */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 ${project.isCover ? "object-cover" : "object-contain p-4 bg-white"}`}
                />
              ) : (
                <div className="w-full h-48 bg-orange-100 flex flex-col items-center justify-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-orange-200 border-2 border-dashed border-orange-400 flex items-center justify-center text-orange-400 text-2xl">
                    +
                  </div>
                  <p className="text-stone-400 text-xs" style={{ fontFamily: "satoshi-medium" }}>
                    Add project logo
                  </p>
                </div>
              )}

              <div className="p-6 text-left flex flex-col flex-1">
                <h3
                  className="text-xl font-semibold text-stone-800 mb-2"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-zinc-600 text-sm mb-4"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-rose-200 text-rose-800 px-2 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons — pushed to bottom */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white border border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-stone-100 transition-colors"
                      style={{ fontFamily: "satoshi-medium" }}
                    >
                      View Repository
                    </a>
                  )}
                  {project.projectPage.startsWith("http") ? (
                    <a
                      href={project.projectPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-rose-300 border border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-rose-400 transition-colors"
                      style={{ fontFamily: "satoshi-medium" }}
                    >
                      View Project
                    </a>
                  ) : (
                    <Link
                      to={project.projectPage}
                      className="inline-block bg-rose-300 border border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-rose-400 transition-colors"
                      style={{ fontFamily: "satoshi-medium" }}
                    >
                      View Project
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;