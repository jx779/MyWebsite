import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/pingme-map.png";
import img2 from "../assets/pingme-geofence.png";
import img3 from "../assets/pingme-reminders.png";
import img4 from "../assets/pingme-calendar.png";
import appLogoImg from "../assets/PingMeIcon.png";

const features = [
    {
        title: "Location Pinpointing",
        description:
            "Users can search and pin any location on an interactive Google Maps interface. The app converts the selected pin into a geofence trigger point for reminders.",
        image: img1,
        imageAlt: "Pinpointing desired location using Google Maps API",
    },
    {
        title: "Geofence-Based Reminders",
        description:
            "Set location-based reminders that automatically trigger when you enter or exit a defined geofenced area. No more forgetting tasks when you're on the move.",
        image: img2,
        imageAlt: "Setting location-based reminder using geofencing",
    },
    {
        title: "Reminder Management",
        description: (
            <>
                View and manage all your active reminders in one place. Each reminder shows its linked location, trigger condition, and status.
                <br /><br />
                Live weather updates are also displayed with your reminders to help you plan ahead.
            </>
        ),
        image: img3,
        imageAlt: "Example of set reminders",
    },
    {
        title: "Calendar & AI Suggestions",
        description:
            "A calendar view of your scheduled reminders paired with Gemini 2.0 Flash AI that intelligently suggests reminders based on your habits and upcoming plans.",
        image: img4,
        imageAlt: "Calendar and AI suggested reminders",
    },
];

const techStack = [
    { name: "React Native", color: "bg-cyan-100 text-cyan-800" },
    { name: "Firebase", color: "bg-yellow-100 text-yellow-800" },
    { name: "Google Maps API", color: "bg-green-100 text-green-800" },
    { name: "Gemini 2.0 Flash AI", color: "bg-purple-100 text-purple-800" },
    { name: "Expo", color: "bg-stone-100 text-stone-800" },
    { name: "Expo Push Notifications", color: "bg-rose-100 text-rose-800" },
    { name: "OpenWeatherMap API", color: "bg-blue-100 text-blue-800" },
];

const highlights = [
    { label: "Cross-Platform", desc: "Runs on both iOS and Android via React Native" },
    { label: "Secure Auth", desc: "User authentication and data management with Firebase" },
    { label: "AI-Powered", desc: "Gemini 2.0 Flash suggests reminders intelligently" },
    { label: "Maps Integration", desc: "Google Maps API for precise location selection" },
];

const PingMe = () => {
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
                    {/* App logo placeholder */}
                    <img src={appLogoImg} className="w-20 h-20 rounded-2xl object-cover" />
                    <div>
                        <h1
                            className="text-4xl md:text-5xl text-stone-800 mb-2"
                            style={{ fontFamily: "satoshi-black" }}
                        >
                            PingMe
                        </h1>
                        <p
                            className="text-zinc-500 text-base"
                            style={{ fontFamily: "satoshi-medium" }}
                        >
                            Location-Based Reminder App · React Native · Cross-Platform
                        </p>
                    </div>
                </div>

                <p
                    className="text-zinc-600 text-lg leading-relaxed max-w-3xl"
                    style={{ fontFamily: "satoshi-medium" }}
                >
                    PingMe is a cross-platform mobile application that lets you set reminders
                    tied to real-world locations. Instead of time-based alerts, reminders trigger
                    automatically when you arrive at or leave a place — powered by geofencing,
                    Google Maps, and Gemini 2.0 Flash AI.
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

            {/* Features — alternating layout */}
            <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto space-y-20">
                <h2
                    className="text-3xl text-stone-800 text-center mb-10"
                    style={{ fontFamily: "satoshi-black" }}
                >
                    Key Features
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
            <section className="bg-white py-12 px-6 text-center">
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

export default PingMe;