import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/pomodoro.jpg";
import img2 from "../assets/games.jpg";
import img3 from "../assets/flappybird.jpg";
import img4 from "../assets/Snake.jpg";
import img5 from "../assets/tetris.jpg";
import img6 from "../assets/2048.jpg";
import appIcon from "../assets/BreakieIcon.png";

const techStack = [
  { name: "HTML", color: "bg-orange-100 text-orange-800" },
  { name: "CSS", color: "bg-blue-100 text-blue-800" },
  { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
  { name: "Chrome Extensions API", color: "bg-green-100 text-green-800" },
];

const highlights = [
  {label: "Focus Timer", desc: "Customisable focus and break intervals to match your study style" },
  {label: "5 Mini-Games", desc: "Play built-in games during your breaks as a reward" },
  {label: "2-Player Mode", desc: "Compete with a friend in Snake during your break" },
  {label: "Progress Tracking", desc: "Track your focus sessions and in-game rewards over time" },
];

const features = [
  {
    title: "Set Your Break Intervals",
    description:
      "Customise your focus and break durations to suit your study habits. Whether you prefer the Pomodoro technique or your own rhythm, Breakie adapts to how you work best.",
    image: img1,
    imageAlt: "Setting your break intervals",
  },
  {
    title: "Break Popup Notification",
    description:
      "When your focus session ends, the Breakie extension pops up automatically in your browser for the duration of your break — reminding you to step back and recharge before diving back in.",
    image: img2,
    imageAlt: "Chrome extension popup during break",
  },
];

const games = [
  {
    title: "Flappy Bird",
    description: "A classic tap-to-fly arcade game. Dodge the pipes and beat your high score during your break.",
    image: img3,
    imageAlt: "Flappy Bird mini-game",
    tag: "Single Player",
    tagColor: "bg-rose-100 text-rose-800",
  },
  {
    title: "2-Player Snake",
    description: "Go head-to-head with a friend on the same keyboard. The last snake standing wins.",
    image: img4,
    imageAlt: "2-player Snake game",
    tag: "2 Players",
    tagColor: "bg-purple-100 text-purple-800",
  },
  {
    title: "Tetris",
    description: "The timeless block-stacking puzzle. Clear lines as fast as you can before your break ends.",
    image: img5,
    imageAlt: "Tetris mini-game",
    tag: "Single Player",
    tagColor: "bg-rose-100 text-rose-800",
  },
  {
    title: "2048",
    description: "Slide and merge tiles to reach 2048. Simple to pick up, hard to put down.",
    image: img6,
    imageAlt: "2048 mini-game",
    tag: "Single Player",
    tagColor: "bg-rose-100 text-rose-800",
  },
];

const Breakie = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="min-h-screen bg-orange-50">

      {/* Back button */}
      <div className="px-6 md:px-16 pt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm transition-colors"
          style={{ fontFamily: "satoshi-medium" }}
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <motion.section
        className="px-6 md:px-16 py-12 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
        <img src={appIcon} className="w-20 h-20 rounded-2xl object-contain" />
            
          <div>
            <h1
              className="text-4xl md:text-5xl text-stone-800 mb-2"
              style={{ fontFamily: "satoshi-black" }}
            >
              Breakie
            </h1>
            <p
              className="text-zinc-500 text-base"
              style={{ fontFamily: "satoshi-medium" }}
            >
              Gamified Chrome Extension · HTML · JavaScript · Focus & Play
            </p>
          </div>
        </div>

        <p
          className="text-zinc-600 text-lg leading-relaxed max-w-3xl"
          style={{ fontFamily: "satoshi-medium" }}
        >
          Breakie is a gamified Chrome extension designed to make studying more sustainable.
          It tracks your focus sessions and breaks, then rewards you with mini-games
          during downtime — turning productivity into something you actually look forward to.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {techStack.map((t, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${t.color}`}>
              {t.name}
            </span>
          ))}
        </div>

        {/* Repo button */}
      </motion.section>

      {/* Highlights row */}
      <section className="bg-white py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{h.emoji}</div>
              <h4 className="text-stone-800 text-sm mb-1" style={{ fontFamily: "satoshi-bold" }}>{h.label}</h4>
              <p className="text-zinc-500 text-xs" style={{ fontFamily: "satoshi-medium" }}>{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works — alternating layout */}
      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto space-y-20">
        <h2
          className="text-3xl text-stone-800 text-center"
          style={{ fontFamily: "satoshi-black" }}
        >
          How It Works
        </h2>

        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Screenshot */}
            <div
              className="w-full md:w-1/2 cursor-pointer"
              onClick={() => feature.image && setLightbox(feature.image)}
            >
              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full rounded-2xl shadow-lg object-contain border border-stone-200 hover:shadow-xl transition-shadow"
                />
              ) : (
                <div className="w-full h-72 bg-orange-100 rounded-2xl border-2 border-dashed border-orange-300 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-dashed border-orange-400 flex items-center justify-center text-orange-400 text-xl">+</div>
                  <p className="text-stone-400 text-sm text-center px-4" style={{ fontFamily: "satoshi-medium" }}>
                    {feature.imageAlt}
                  </p>
                </div>
              )}
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3
                className="text-2xl text-stone-800 mb-4"
                style={{ fontFamily: "satoshi-bold" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-zinc-600 leading-relaxed"
                style={{ fontFamily: "satoshi-medium" }}
              >
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Games Grid */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl text-stone-800 text-center mb-4"
            style={{ fontFamily: "satoshi-black" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🕹️ Break Games
          </motion.h2>
          <motion.p
            className="text-zinc-500 text-center mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "satoshi-medium" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            When your break kicks in, choose from 4 built-in games to recharge before your next focus session.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={index}
                className="bg-orange-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Game screenshot */}
                <div
                  className="cursor-pointer"
                  onClick={() => game.image && setLightbox(game.image)}
                >
                  {game.image ? (
                    <img
                      src={game.image}
                      alt={game.imageAlt}
                      className="w-full h-52 object-contain p-3 bg-stone-100"
                    />
                  ) : (
                    <div className="w-full h-52 bg-orange-100 flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-orange-200 border-2 border-dashed border-orange-400 flex items-center justify-center text-orange-400 text-lg">+</div>
                      <p className="text-stone-400 text-xs text-center px-4" style={{ fontFamily: "satoshi-medium" }}>
                        {game.imageAlt}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg text-stone-800" style={{ fontFamily: "satoshi-bold" }}>
                      {game.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${game.tagColor}`}>
                      {game.tag}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm" style={{ fontFamily: "satoshi-medium" }}>
                    {game.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Screenshot" className="max-w-full max-h-full rounded-xl shadow-2xl" />
        </div>
      )}

      {/* Footer CTA */}
      <section className="bg-orange-50 py-12 px-6 text-center">
        <p className="text-zinc-500 text-sm mb-4" style={{ fontFamily: "satoshi-medium" }}>
          Want to see more of my work?
        </p>
        <Link
          to="/projects"
          className="inline-block bg-rose-300 border border-stone-800 text-stone-800 px-6 py-2 rounded-sm text-sm font-semibold hover:bg-rose-400 transition-colors"
          style={{ fontFamily: "satoshi-medium" }}
        >
          ← Back to All Projects
        </Link>
      </section>
    </div>
  );
};

export default Breakie;