"use client";
import Emoji from "./components/Emoji";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

import '../app/globals.css'
export default function Home() {
  const myJob = ["Fullstack Developer"];
  return (
    <div className="max-w-8xl mx-auto flex flex-col relative bg-black">
      <Navbar />
      <div className="md:mt-[60px]">
        <main className="mt-10 md:mt-1 mx-4 flex flex-col-reverse gap-6 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
          <div className="space-y-4 text-center md:text-left px-4 md:px-10">
            <motion.p
              className="text-amber-200 text-base md:text-lg"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hello World, I'm
            </motion.p>

            <motion.h1
              className="text-3xl font-bold md:text-5xl text-white"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Halozra
            </motion.h1>

            <h2
              style={{
                width: "0",
                animation:
                  "typing 5s steps(40, end) infinite, blink 0.7s step-end infinite",
              }}
              className="cursor flex typewrite text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 whitespace-nowrap"
            >
              {myJob}
            </h2>

            <style>
              {`
              @keyframes typing {
                0% { width: 0 }
                60% { width: 100% }
                85% { width: 100% }
                100% { width: 0 }
              }

              @keyframes blink {
                50% { border-color: transparent }
              }

              .cursor::after {
                content: '|';
                color: white;
                animation: blinkCursor 0.7s infinite;
              }

              @keyframes blinkCursor {
                0%, 100% { opacity: 1 }
                50% { opacity: 0 }
              }
            `}
            </style>

            <motion.p
              className="flex text-sm md:text-base text-white justify-center md:justify-start"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Welcome to my personal website. <Emoji />
            </motion.p>
          </div>

          <div className="flex justify-center md:justify-start">
            <motion.img
              src="/images/Artur1.jpg"
              className="w-8/12 sm:w-6/12 md:w-auto md:h-auto rounded-full border-4 border-amber-200 shadow-lg"
              alt="Profile"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
