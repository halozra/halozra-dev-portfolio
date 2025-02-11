"use client";
import "../globals.css";
import Emoji from "../components/Emoji";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="max-w-8xl mx-auto flex flex-col relative bg-black">
      <Navbar />
      <div className="md:mt-[60px] p-4">
        <main className="mt-6 md:mt-1 flex flex-col-reverse gap-6 items-center md:flex-row md:gap-16 md:justify-center min-h-[70vh] md:min-h-[80vh]">
          {/* Section Text */}
          <div className="text-center md:text-left max-w-md">
            <motion.h1
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, color: "#fbbf24" }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 flex justify-center md:justify-start"
            >
              Hello, I'm Halozra! <Emoji />
            </motion.h1>

            <motion.p
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="text-base md:text-lg text-gray-300 mb-3"
            >
              I'm a passionate{" "}
              <span className="text-amber-400">Web Developer</span> who loves
              building interactive and user-friendly websites using{" "}
              <span className="text-blue-400">React</span> and{" "}
              <span className="text-green-400">Node.js</span>. 🚀
            </motion.p>

            <motion.p
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="text-base md:text-lg text-gray-300 mb-3"
            >
              When I'm not coding, you'll find me exploring new tech, gaming, or
              enjoying a good cup of coffee. ☕️🎮
            </motion.p>

            <motion.a
              href="https://github.com/halozra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 bg-amber-400 text-white rounded-xl shadow-lg hover:bg-amber-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Out My Projects 🚀
            </motion.a>
          </div>

          {/* Section Gambar/Avatar */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/Artur1.jpg"
              alt="My Avatar"
              className="rounded-full shadow-lg w-50 h-50 md:w-100 md:h-100 object-cover"
            />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
