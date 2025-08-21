import React, { useState } from "react";
import { motion } from "framer-motion";
import SplitText from "./Animate/SplitText";
import TextPressure from "./Animate/PressureText";
import DarkVeil from "./Background/DarkVeil";
import { Laugh } from "lucide-react";
import Magnet from "./Animate/Magnet";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileCard from "./Animate/ProfileCard";
import ProfileImg from "../public/Profile.jpeg"

import "./App.css";
import { useEffect } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Klinik Harapan",
    description: "Klinik Application",
    tags: ["C#", "Visual Studio", "Desktop"],
    url: "#",
  },
  {
    id: 2,
    title: "CarWash Dashboard",
    description: "Admin dashboard built with responsive tables",
    tags: ["Laravel", "Filament"],
    url: "#",
  },
  {
    id: 3,
    title: "BomberGame (Vanilla JS)",
    description: "Mini-game built for LKS training exercises.",
    tags: ["JavaScript", "GameDev"],
    url: "#",
  },
];
const Certificate = [
  {
    id: 1,
    title:
      "Medallion for Excellence – National Student Skills Competition (LKS) in Web Technologies, Indonesia 2025",
    description:
      "Awarded for outstanding performance at the national level, demonstrating advanced skills in full-stack web development using Laravel and React.",
    location: " Jakarta & Depok | 🗓️ July 27 – August 1, 2025",
    tags: ["Javascript", "React JS", "Laravel"],

    url: "#",
  },
  {
    id: 2,
    title:
      "1st Place – Provincial Student Skills Competition (LKS) in Web Technologies, Central Kalimantan 2025",
    description:
      "Secured first place by building a responsive and functional web application, showcasing strong problem-solving and coding abilities.",
    tags: ["Laravel", "React JS"],
    location: " Palangka Raya | 🗓️ June 23 – 26, 2025",
    url: "#",
  },
  {
    id: 3,
    title:
      "1st Place – City Student Skills Competition (LKS) in Web Technologies, Palangka Raya 2025",
    description:
      "Recognized as the best competitor in the city-level competition, excelling in both front-end and back-end development tasks With Javascript Games.",
    location: "Palangka Raya | 🗓️ May 26 – 27, 2025",
    tags: ["JavaScript", "Laravel"],
    url: "#",
  },
];

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Portfolio() {


  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
    });
  }, []);

  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 -z-10">
          <DarkVeil />
        </div>

        <main className="min-h-screen bg-gradient-to-b from-blue-900/70 via-blue-950/70 to-black/70 dark:from-blue-950/70 dark:via-gray-900/70 dark:to-black/70 text-gray-100 transition-colors">
          <Header />

          {/* HERO */}
          <section id="hero" className="container mx-auto px-6 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm  tracking-widest text-white">
              Hello,I am
                </p>
                <SplitText
                  text="Joshua Christian Lionel!"
                  className="font-semibold text-center text-3xl cursor-target"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <p className="mt-6 max-w-lg">
                  I'm Joshua — a student at SMKN 1 PALANGKA RAYA majoring in
                  Software Engineering. Still learning.
                </p>

                <div className="mt-8 flex gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium shadow cursor-target hover:bg-blue-700  transition-colors duration:300"
                  >
                    Project
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 rounded-md border cursor-target  cursor-target hover:bg-blue-700  transition-colors duration:300"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>

              
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center cursor-pointer"
                >
                  <ProfileCard
                    name="Joshua CL"
                    title="Fullstack Developer"
                    handle="joshualearn"
                    status="Offline"
                    contactText="Contact Me"
                    avatarUrl= {ProfileImg}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                  />
                </motion.div>
      
            </div>
          </section>

          <section id="projects" className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold" data-aos="fade-right">
              My Project
            </h2>
            <p className="mt-2 text-gray-300  max-w-xl" data-aos="fade-left">
              A collection of projects that I have worked on, including school
              assignments
            </p>

            <div
              className="mt-8 grid md:grid-cols-3 gap-6"
              data-aos="fade-left"
            >
              {projects.map((p) => (
                <motion.article
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className="bg-gray-900 rounded-2xl p-5 shadow cursor-pointer"
                >
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 border rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href={p.url}
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      Detail
                    </a>
                    <a
                      href={p.url}
                      className="text-sm px-3 py-1 border rounded-md"
                    >
                      Live
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* PRESTASI */}
          <section id="projects" className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold" data-aos="fade-right">
              Achievement
            </h2>
            <p className="mt-2 text-gray-300  max-w-xl" data-aos="fade-left">
              Collection of Achievement I Received
            </p>

            <div
              className="mt-8 grid md:grid-cols-3 gap-6"
              data-aos="fade-right"
            >
              {Certificate.map((p) => (
                <motion.article
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className=" bg-gray-900 rounded-2xl p-5 shadow cursor-target cursor-pointer"
                >
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300 ">{p.description}</p>
                  <p className="mt-2 text-sm text-gray-300 ">{p.location}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 border rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between"></div>
                </motion.article>
              ))}
            </div>
          </section>
          {/* ABOUT */}
          <section id="about" className="container mx-auto px-6 py-12">
            <div
              className="grid md:grid-cols-2 gap-8 items-center"
              data-aos="fade-right"
            >
              <div>
                <h2 className="text-2xl font-bold">About Me</h2>
                <p className="mt-3 text-gray-300">
                  I'm a vocational high school student majoring in Software
                  Engineering. I have experience creating desktop applications
                  (C#), full-stack web applications (Laravel & React), and
                  simple games.
                </p>

                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <li>🎯 Problem solving</li>
                  <li>⚡ Fast learner</li>
                  <li>🤝 Team player</li>
                  <li>🚀 Growth mindset</li>
                </ul>
              </div>

              <Magnet>
              <div>
                <div
                  className="rounded-xl p-6 bg-indigo-900/30 cursor-pointer"
                  data-aos="fade-up"
                >
                  <h3 className="font-semibold">Skills Language</h3>
                  <motion.div className="mt-3 space-y-3">
                    <Skill name="HTML/CSS" level={50} />
                    <Skill name="JavaScript" level={50} />
                    <Skill name="PHP" level={75} />
                    <Skill name="C#" level={50} />
                  </motion.div>
                </div>
              </div>
              </Magnet>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="container mx-auto px-6 py-12"
            data-aos="fade-down"
          >
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="mt-6 max-w-xl flex gap-3">
              <div className="flex gap-4">
                <Github /><h3>  |  @JoshNells13</h3>
              </div>
              <div className="flex gap-4">
                <Instagram/><h3> | @joshuaffmax</h3>
              </div>
            </div>
          </section>
          <Footer/>
        </main>
      </div>
    </div>
  );
}

function Skill({ name, level = 60 }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full  dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-600"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
