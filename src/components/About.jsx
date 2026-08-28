import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, Database, BrainCircuit, ArrowUpRight } from "lucide-react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import BentoGrid from "./BentoGrid";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full sm:w-[260px] flex-1"
    >
      <div
        className="glass-card rounded-3xl p-6 h-full flex flex-col items-center justify-between text-center group cursor-pointer border border-white/10 hover:border-accent-purple/40 relative overflow-hidden"
      >

        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-accent-purple/20 via-accent-cyan/10 to-transparent flex items-center justify-center p-3 mb-5 group-hover:scale-110 transition-transform">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>

        <div>
          <h3 className="text-[var(--text-primary)] text-lg font-bold group-hover:text-accent-purple transition-colors">
            {title}
          </h3>
          <span className="text-xs text-secondary mt-1 block">Production Specialization</span>
        </div>

        <div className="w-6 h-1 rounded-full bg-accent-purple/40 group-hover:w-12 group-hover:bg-accent-purple transition-all mt-4" />
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Engineering Excellence</p>
        <h2 className={styles.sectionHeadText}>About Yohannes.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-sm sm:text-base max-w-4xl leading-relaxed"
      >
        I'm a computer science specialist and full-stack software engineer dedicated to building intuitive, high-impact digital experiences. With a deep foundation in core computer science principles—algorithms, system architectures, and concurrent backends—I bring together modern UI ergonomics (React, Next.js, Flutter) with robust backend engines (Golang, Node.js, Spring Boot) and applied AI/ML pipelines (RAG systems, predictive spatio-temporal modeling).
      </motion.p>

      {/* Services Glass Cards */}
      <div className="mt-10 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Apple Bento Grid Section */}
      <BentoGrid />
    </>
  );
};

export default SectionWrapper(About, "about");

