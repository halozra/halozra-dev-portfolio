// src/pages/portfolio.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { projects } from "../components/projectsData";

export default function Portfolio() {
  return (
    <div className="max-w-8xl mx-auto flex flex-col relative bg-black">
      <Navbar />
      <div className="min-h-screen md:mt-[60px] bg-black text-white p-4">
        <main className="mt-10 md:mt-1 flex flex-col gap-8 items-center md:justify-center min-h-[65vh] md:min-h-[80vh]">
          {/* Intro Text Section */}
          <motion.div
            className="text-center max-w-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My Portfolio
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-4">
              Here you can see some of the projects I’ve worked on. I am a
              passionate Web Developer with expertise in building interactive
              and user-friendly web applications.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Feel free to explore my work and reach out if you want to
              collaborate!
            </p>
          </motion.div>

          {/* Projects Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <p className="text-gray-300 text-sm md:text-base mb-4">
                  {project.description}
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-600 transition duration-300 text-sm md:text-base"
                >
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
