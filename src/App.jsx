import React, { useState } from "react";
import { motion } from "framer-motion";
import SplitText from "./Animate/SplitText";
import TextPressure from "./Animate/PressureText";
import DarkVeil from "./Background/DarkVeil";
import { Laugh } from "lucide-react";
import Magnet from "./Animate/Magnet";
import TargetCursor from "./Animate/TargetCursor";
import "./App.css";

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
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TargetCursor spinDuration={2} />

      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 -z-10">
          <DarkVeil />
        </div>

        <main className="min-h-screen bg-gradient-to-b from-blue-900/70 via-blue-950/70 to-black/70 dark:from-blue-950/70 dark:via-gray-900/70 dark:to-black/70 text-gray-100 transition-colors">
          <header className="container mx-auto p-6 flex items-center justify-between">
            <a
              href="#hero"
              className="font-extrabold text-xl tracking-tight cursor-target"
            >
              Joshua<span className="text-indigo-600">.</span>
            </a>

            <nav className="hidden md:flex gap-6 items-center">
              <a href="#projects" className="hover:underline cursor-target">
                Projects
              </a>
              <a href="#about" className="hover:underline cursor-target">
                About
              </a>
              <a href="#contact" className="hover:underline cursor-target">
                Contact
              </a>
            </nav>

            <button
              className="md:hidden p-2 rounded-md border"
              onClick={() => setOpen((s) => !s)}
              aria-label="Open menu"
            >
              {open ? "✖" : "☰"}
            </button>
          </header>

          {open && (
            <div className="md:hidden container mx-auto px-6 pb-4">
              <nav className="flex flex-col gap-3">
                <a href="#projects" className="block">
                  Projects
                </a>
                <a href="#about" className="block">
                  About
                </a>
                <a href="#contact" className="block">
                  Contact
                </a>
              </nav>
            </div>
          )}

          {/* HERO */}
          <section id="hero" className="container mx-auto px-6 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-widest text-white">
                  Halo Saya
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
                    Lihat Proyek
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 rounded-md border cursor-target  cursor-target hover:bg-blue-700  transition-colors duration:300"
                  >
                    Hubungi
                  </a>
                </div>
              </motion.div>

              <Magnet>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="w-full max-w-sm rounded-2xl shadow-2xl p-6 bg-gray-900 cursor-target">
                    {/* Replace with real image or Lottie */}
                    <div className="h-48 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold">
                      <Laugh />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-bold text-lg">Joshua</h3>
                      <p className="text-sm mt-1">
                        Fullstack Developer | UI enthusiast | LKS Nationalist
                      </p>
                      <div className="mt-3 flex gap-2 text-xs flex-wrap">
                        <span className="px-2 py-1 rounded-full border">
                          React
                        </span>
                        <span className="px-2 py-1 rounded-full border">
                          Laravel
                        </span>
                        <span className="px-2 py-1 rounded-full border">
                          C#
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Magnet>
            </div>
          </section>

          <section id="projects" className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold">My Project</h2>
            <p className="mt-2 text-gray-600  max-w-xl">
              A collection of projects that I have worked on, including school
              assignments
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <motion.article
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className="bg-gray-900 rounded-2xl p-5 shadow cursor-target"
                >
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {p.description}
                  </p>
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
                      Lihat detail
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
            <h2 className="text-2xl font-bold">Certificate</h2>
            <p className="mt-2 text-gray-600  max-w-xl">
              Collection of Certificates I Received
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {Certificate.map((p) => (
                <motion.article
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className=" bg-gray-900 rounded-2xl p-5 shadow cursor-target"
                >
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 ">
                    {p.description}
                  </p>
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
                      Lihat detail
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
          {/* ABOUT */}
          <section id="about" className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold">About Me</h2>
                <p className="mt-3 text-gray-600">
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

              <div>
                <div className="rounded-xl p-6 bg-indigo-900/30 cursor-target">
                  <h3 className="font-semibold">Skills</h3>
                  <motion.div className="mt-3 space-y-3">
                    <Skill name="React" level={50} />
                    <Skill name="JavaScript" level={50} />
                    <Skill name="Laravel" level={75} />
                    <Skill name="C#" level={50} />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2 text-gray-600">
              STILL IN DEVELOPMENT
            </p>

            <div className="mt-6 max-w-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted! (demo)");
                }}
                className="grid gap-3"
              >
                <input
                  className="px-4 py-2 rounded-md border text-black"
                  placeholder="Nama"
                  required
                />
                <input
                  className="px-4 py-2 rounded-md border text-black"
                  placeholder="Email"
                  type="email"
                  required
                />
                <textarea
                  className="px-4 py-2 rounded-md border text-black"
                  placeholder="Pesan"
                  rows={4}
                  required
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-indigo-600 text-white"
                  >
                    Kirim
                  </button>
                  <button type="button" className="px-4 py-2 rounded-md border">
                    Email
                  </button>
                </div>
              </form>
            </div>
          </section>

          <footer className="border-t dark:border-gray-700 mt-12">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">
                © {new Date().getFullYear()} Joshua STILL IN DEVELOPMENT
              </p>
              <div className="flex gap-3 mt-3 md:mt-0">
                <a
                  href="https://github.com/JoshNells13"
                  target="blank"
                  className="text-sm cursor-target"
                >
                  GitHub
                </a>
                <a href="#" className="text-sm cursor-target">
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
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
