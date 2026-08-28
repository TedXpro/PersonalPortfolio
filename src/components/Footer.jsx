import React from "react";
import { Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { logo } from "../assets";


const GithubIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-[var(--glass-border)] bg-[var(--primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Yohannes logo"
                className="w-8 h-8 object-contain dark:invert"
              />

              <div>
                <h3 className="font-bold text-base tracking-tight text-[var(--text-primary)]">
                  Yohannes Woldeyes
                </h3>
                <p className="text-xs text-secondary font-medium">Software Engineer</p>
              </div>
            </div>


            <p className="text-xs text-secondary leading-relaxed">
              Full-stack software developer building scalable web applications, fluid mobile platforms, and AI data systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] text-secondary">Available for new opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-secondary">
              <li>
                <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
                  About & Specializations
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple font-semibold transition-colors flex items-center gap-1">
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Featured Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              Featured Work
            </h4>
            <ul className="space-y-2.5 text-xs text-secondary">
              <li>
                <a
                  href="https://birrwise.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 font-medium transition-colors flex items-center gap-1"
                >
                  <span>BirrWise (Financial Tracker)</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">
                  Travel Agency Platform
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">
                  Traveler Mobile App (Flutter)
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">
                  Car Rental Management
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-secondary">
              <li>
                <a
                  href="mailto:johannes.woldeyes@gmail.com"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                  <span className="font-mono truncate">johannes.woldeyes@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TedXpro"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                >
                  <GithubIcon />
                  <span>github.com/TedXpro</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yohannes-woldeyes/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon />
                  <span>linkedin.com/in/yohannes-woldeyes</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-12 pt-6 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>© {new Date().getFullYear()} Yohannes Woldeyes. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/TedXpro"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-secondary hover:text-[var(--text-primary)] hover:border-white/20 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/yohannes-woldeyes/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-secondary hover:text-[var(--text-primary)] hover:border-white/20 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg glass-card text-xs font-semibold text-secondary hover:text-[var(--text-primary)] transition-all ml-2"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
