import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  BrainCircuit,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  CheckCircle2,
  Terminal,
  Activity,
} from "lucide-react";
import { bentoStats, skillCategories } from "../constants";
import { useTheme } from "../context/ThemeContext";
import CountUp from "./CountUp";
import GitHubStatsCard from "./GitHubStatsCard";

export const BentoGrid = () => {

  const { theme } = useTheme();

  return (
    <div className="w-full my-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Box 1: Live Status & Profile Highlights (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wide">
                Available for New Projects & Roles
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] leading-snug">
              Architecting <span className="purple-cyan-gradient">Scalable Software</span> & Intuitive AI Systems
            </h3>
            <p className="mt-3 text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
              Specialized in crafting fluid full-stack web applications, Flutter mobile apps, Golang microservices, and AI-driven data pipelines.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[var(--glass-border)]">
            {bentoStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <CountUp
                  value={stat.value}
                  duration={1.8}
                  className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]"
                />
                <span className="text-xs font-medium text-secondary mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>


        {/* Box 2: GitHub & Coding Activity (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between relative overflow-hidden"
        >
          <GitHubStatsCard />
        </motion.div>


        {/* Box 3: Categorized Skill Matrix (Span 12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-12 glass-card p-6 sm:p-8 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent-purple" />
                <span>Ecosystem & Technical Capabilities</span>
              </h4>
              <p className="text-xs sm:text-sm text-secondary">
                Production-tested tools and frameworks utilized across projects.
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full glass-pill">Full Stack & AI</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Frontend */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-purple/30 transition-colors">
              <div className="flex items-center gap-2 text-accent-purple font-semibold text-xs uppercase tracking-wider mb-3">
                <Code className="w-4 h-4" />
                <span>Frontend & Mobile</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-xl bg-white/5 text-[var(--text-primary)] hover:bg-accent-purple/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-cyan/30 transition-colors">
              <div className="flex items-center gap-2 text-accent-cyan font-semibold text-xs uppercase tracking-wider mb-3">
                <Cpu className="w-4 h-4" />
                <span>Backend & APIs</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.backend.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-xl bg-white/5 text-[var(--text-primary)] hover:bg-accent-cyan/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Data */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-emerald/30 transition-colors">
              <div className="flex items-center gap-2 text-accent-emerald font-semibold text-xs uppercase tracking-wider mb-3">
                <BrainCircuit className="w-4 h-4" />
                <span>AI / ML & Data</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.aiAndData.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-xl bg-white/5 text-[var(--text-primary)] hover:bg-accent-emerald/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-pink/30 transition-colors">
              <div className="flex items-center gap-2 text-accent-pink font-semibold text-xs uppercase tracking-wider mb-3">
                <Database className="w-4 h-4" />
                <span>Database & DevOps</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.databaseAndDevOps.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-xl bg-white/5 text-[var(--text-primary)] hover:bg-accent-pink/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoGrid;
