import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, FolderGit2 } from "lucide-react";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[88vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-20 pb-16 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className={`relative z-10 max-w-5xl mx-auto ${styles.paddingX} w-full flex flex-col items-center text-center`}>
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-[var(--text-primary)]">
            Open for Opportunities
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.15]"
        >
          Hi, I'm <span className="text-accent-purple">Yohannes</span>.<br />
          Software Engineer & Full Stack Developer.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed"
        >
          I design and build high-performance web applications, fluid mobile experiences, and data-driven systems with clean architectures.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-3.5"
        >
          <a
            href="#work"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-purple hover:bg-purple-600 text-white font-semibold text-sm shadow-md shadow-accent-purple/20 transition-all hover:scale-105 active:scale-95"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-secondary hover:text-[var(--text-primary)] font-semibold text-sm transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-2"
        >
          {["React / Next.js", "Golang", "Flutter", "TypeScript", "PostgreSQL", "Machine Learning"].map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-lg bg-white/5 text-secondary border border-white/5"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a href="#about" className="flex flex-col items-center gap-2 text-secondary hover:text-[var(--text-primary)] transition-colors">
            <span className="text-[11px] uppercase tracking-widest font-mono">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-secondary/30 flex justify-center items-start p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-1 h-1 rounded-full bg-accent-purple"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


