import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Search,
  CheckCircle2,
  ArrowUpRight,
  X,
} from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CATEGORIES = ["All", "Fintech", "Full Stack", "Mobile", "AI & ML"];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  category,
  onSelect,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full sm:w-[350px]"
    >
      <div
        onClick={onSelect}
        className="glass-card rounded-2xl p-5 cursor-pointer h-full flex flex-col justify-between group border border-white/5 hover:border-accent-purple/40 relative overflow-hidden transition-all duration-300 shadow-md"
      >
        <div>
          {/* Native OpenGraph Preview Banner */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/10 shadow-sm">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />

            {/* Category Tag */}
            {category && (
              <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold px-2.5 py-0.5 rounded-full glass-pill backdrop-blur-md">
                {category}
              </span>
            )}

            {/* Domain Pill Badge */}
            {live_link && (
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md glass-panel text-[10px] font-mono text-white/90 flex items-center gap-1 shadow-sm backdrop-blur-md">
                <span>{live_link.replace("https://", "").replace("www.", "").split("/")[0]}</span>
                <ArrowUpRight className="w-3 h-3 text-accent-purple" />
              </div>
            )}

            {/* Quick Action Overlay on Hover */}
            <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              {source_code_link && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_code_link, "_blank");
                  }}
                  className="w-7 h-7 rounded-lg glass-panel flex justify-center items-center cursor-pointer hover:scale-110 transition-all text-white shadow-sm"
                  title="Source Code"
                >
                  <Code2 className="w-3.5 h-3.5" />
                </div>
              )}
              {live_link && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(live_link, "_blank");
                  }}
                  className="w-7 h-7 rounded-lg bg-accent-purple hover:bg-purple-600 flex justify-center items-center cursor-pointer hover:scale-110 transition-all text-white shadow-sm"
                  title="Visit Live Site"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          </div>

          <h3 className="text-[var(--text-primary)] font-bold text-lg group-hover:text-accent-purple transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-xs sm:text-sm line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 text-secondary"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="glass-panel p-6 sm:p-8 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full glass-card flex items-center justify-center text-secondary hover:text-[var(--text-primary)] transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            {/* Modal Native OpenGraph Banner */}
            <div className="rounded-xl overflow-hidden relative bg-black/40 border border-white/10 shadow-xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[210px] sm:h-[240px] object-cover object-top"
              />
              {project.live_link && (
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md glass-panel text-[11px] font-mono text-white/90 flex items-center gap-1 shadow-md backdrop-blur-md">
                  <span>{project.live_link.replace("https://", "").replace("www.", "").split("/")[0]}</span>
                  <ArrowUpRight className="w-3 h-3 text-accent-purple" />
                </div>
              )}
            </div>

            <div className="mt-4 flex gap-2.5">
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-accent-purple hover:bg-purple-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all group/link"
                >
                  <span>Visit Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}

              {project.source_code_link && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 rounded-xl glass-card text-[var(--text-primary)] text-xs font-semibold flex items-center justify-center gap-1.5 hover:border-white/30 transition-all"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>



          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-[var(--text-primary)] font-bold text-xl sm:text-2xl">
                {project.name}
              </h2>
              <p className="mt-3 text-secondary text-xs sm:text-sm leading-relaxed">
                {project.detailed_description || project.description}
              </p>

              {project.challenges && (
                <div className="mt-5">
                  <h4 className="text-[var(--text-primary)] font-semibold text-xs uppercase tracking-wider text-accent-purple mb-2">
                    Key Challenges & Solutions
                  </h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.stack_details && (
                <div className="mt-5">
                  <h4 className="text-[var(--text-primary)] font-semibold text-xs uppercase tracking-wider text-accent-purple mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack_details.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-secondary">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Portfolio</p>
        <h2 className={styles.sectionHeadText}>Featured Works.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-sm sm:text-base max-w-3xl leading-relaxed"
      >
        A selection of real-world projects encompassing full-stack web applications, mobile platforms, fintech tools, and AI pipelines.
      </motion.p>

      {/* Filter Tabs & Search */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-accent-purple text-white shadow-sm"
                  : "glass-card text-secondary hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-secondary absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-input w-full py-1.5 pl-8 pr-3 rounded-xl text-xs outline-none placeholder:text-secondary/60"
          />
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id || `project-${index}`}
            index={index}
            {...project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "work");


