import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>Stack & Tools</p>
        <h2 className={styles.sectionHeadText}>Technologies in Action.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center overflow-hidden py-4 mask-radial">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((technology, index) => (
            <div
              className="w-24 sm:w-28 h-24 sm:h-28 flex-shrink-0 glass-card rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform cursor-pointer border border-white/10"
              key={`${technology.name}-${index}`}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
              />
              <span className="text-[10px] sm:text-xs font-semibold text-secondary capitalize truncate max-w-full text-center">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

