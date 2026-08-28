import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  Building2,
  Sparkles,
  ExternalLink,
  Layers,
} from "lucide-react";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import OpenGraphCard from "./OpenGraphCard";


const ExperienceRow = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  const isPresent = experience.date.toLowerCase().includes("present");
  const stepNumber = String(index + 1).padStart(2, "0");

  // Brand Showcase Block
  const BrandShowcase = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-accent-purple/50 shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full group"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-cyan/15 transition-colors" />

      {/* Top Number Milestone & Status */}
      <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
        <span className="text-3xl sm:text-4xl font-black font-mono text-white/20 dark:text-white/15 group-hover:text-accent-purple/40 transition-colors">
          #{stepNumber}
        </span>
        {isPresent ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-bold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Current Role</span>
          </span>
        ) : (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-lg bg-white/5 text-secondary border border-white/5">
            {experience.employment_type || "Engineering"}
          </span>
        )}
      </div>

      {/* Centered Brand Identity Hero Showcase */}
      <div className="my-auto py-4 flex flex-col items-center text-center relative z-10">
        {/* Brand Emblem & Typography Glass Hero Badge */}
        <div className="w-full max-w-sm rounded-3xl glass-panel border border-[var(--glass-border)] p-5 sm:p-6 flex items-center justify-center group-hover:scale-105 group-hover:border-accent-purple/50 transition-all duration-500 shadow-sm">
          {experience.logo_svgs ? (
            <div className="flex items-center gap-3.5">
              <img
                src={experience.logo_svgs.mark}
                alt={`${experience.company_name} mark`}
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
              />
              {experience.logo_svgs.text ? (
                <img
                  src={experience.logo_svgs.text}
                  alt={`${experience.company_name} typography`}
                  className="h-4 sm:h-5 w-auto object-contain dark:invert"
                />
              ) : experience.company_name === "BirrWise" ? (
                <span className="font-black text-2xl sm:text-3xl tracking-tight flex items-center">
                  <span className="text-[#F59809]">Birr</span>
                  <span className="text-black dark:text-white">Wise</span>
                </span>
              ) : (
                <span className="font-black text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                  {experience.logo_svgs.name || experience.company_name}
                </span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 p-2 flex items-center justify-center">
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <span className="font-black text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                {experience.company_name}
              </span>
            </div>
          )}
        </div>

        {/* Native OpenGraph Link Preview Card (Telegram / WhatsApp Standard) */}
        {experience.company_url && (experience.remote_og_image || experience.fallback_og_image) ? (
          <OpenGraphCard
            url={experience.company_url}
            remoteImage={experience.remote_og_image}
            fallbackImage={experience.fallback_og_image}
            title={experience.og_title || `${experience.company_name} — ${experience.tagline}`}
            description={experience.og_description || experience.tagline}
          />
        ) : experience.company_url && (
          <a
            href={experience.company_url}
            target="_blank"
            rel="noreferrer"
            className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass-pill text-xs font-semibold text-accent-purple hover:text-purple-300 hover:border-accent-purple/50 transition-all group/btn shadow-sm"
          >
            <span>Visit {experience.company_name}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}

        {/* Concise Company Tagline */}
        {experience.tagline && (
          <p className="mt-3.5 text-xs text-secondary max-w-xs font-medium leading-relaxed">
            {experience.tagline}
          </p>
        )}
      </div>





      {/* Tech Badges on Brand Side */}
      {experience.tech_stack && (
        <div className="mt-6 pt-4 border-t border-[var(--glass-border)] relative z-10">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-secondary mb-2.5">
            <Layers className="w-3 h-3 text-accent-purple" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {experience.tech_stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 text-secondary border border-white/5 hover:border-accent-purple/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );

  // Role Details & Achievements Block
  const DetailsCard = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-accent-purple/50 shadow-xl transition-all duration-500 relative flex flex-col justify-between h-full group"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Header: Date & Role Info */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full glass-pill text-[var(--text-primary)]">
            <Calendar className="w-3.5 h-3.5 text-accent-purple" />
            <span>{experience.date}</span>
          </span>

          <span className="text-xs text-secondary font-medium hidden sm:block">
            {experience.employment_type || "Production Platform"}
          </span>
        </div>

        {/* Role Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight group-hover:text-accent-purple transition-colors leading-tight">
          {experience.title}
        </h3>

        {/* Key Responsibilities & Achievements */}
        <div className="mt-6 space-y-3.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Key Achievements & Architecture</span>
          </h4>
          <ul className="space-y-3">
            {experience.points.map((point, idx) => (
              <li
                key={`row-pt-${idx}`}
                className="text-secondary text-sm sm:text-base leading-relaxed flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="mt-8 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs text-secondary">
        <span className="font-mono">{experience.company_name}</span>
        <span className="text-accent-purple font-semibold">Engineering Excellence</span>
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16 lg:mb-24 last:mb-0">
      {/* On desktop: Even index = Brand on left (Span 5), Details on right (Span 7) */}
      {/* On desktop: Odd index = Details on left (Span 7), Brand on right (Span 5) */}
      {isEven ? (
        <>
          <div className="lg:col-span-5">{BrandShowcase}</div>
          <div className="lg:col-span-7">{DetailsCard}</div>
        </>
      ) : (
        <>
          <div className="lg:col-span-7 order-2 lg:order-1">{DetailsCard}</div>
          <div className="lg:col-span-5 order-1 lg:order-2">{BrandShowcase}</div>
        </>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-14 sm:mb-20">
        <p className={styles.sectionSubText}>Career Trajectory</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        <p className="mt-3 text-secondary text-xs sm:text-sm max-w-xl mx-auto">
          A track record of full-stack engineering, production SaaS architecture, and autonomous AI systems shown across milestones.
        </p>
      </motion.div>

      {/* Continuous Loose Alternating Scroll List */}
      <div className="max-w-6xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceRow
            key={`experience-row-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");






