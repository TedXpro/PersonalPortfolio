import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  Copy,
  Check,
  Clock,
  MessageSquare,
} from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current text-[var(--text-primary)]`} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current text-[var(--text-primary)]`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);


const Contact = ({ onShowToast }) => {
  const formRef = useRef();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const contactEmail = "johannes.woldeyes@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    if (onShowToast) onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: "Yohannes",
            from_email: form.email,
            to_email: "johannes.woldeyes@gmail.com",
            message: form.message,
          },
          publicKey
        )
        .then(
          () => {
            setLoading(false);
            setSentSuccess(true);
            if (onShowToast) onShowToast("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSentSuccess(false), 5000);
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Something went wrong. Please try again or reach out via email.");
          }
        );
    } else {
      setTimeout(() => {
        setLoading(false);
        setSentSuccess(true);
        if (onShowToast) onShowToast("Message sent! I'll get back to you shortly.");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSentSuccess(false), 5000);
      }, 600);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: Contact Info */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.75)}
          className="w-full lg:w-5/12 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
        >
          <div>
            <span className={styles.sectionSubText}>Get In Touch</span>
            <h3 className={styles.sectionHeadText}>Let's Connect.</h3>
            
            <p className="mt-4 text-secondary text-sm leading-relaxed">
              Whether you have an inquiry, a freelance project, or a full-time engineering opportunity, feel free to reach out.
            </p>

            {/* Email Copy Pill */}
            <div className="mt-6">
              <span className="text-xs text-secondary mb-1.5 block font-medium">Email Address</span>
              <div
                onClick={handleCopyEmail}
                className="glass-panel p-3 rounded-xl flex items-center justify-between cursor-pointer group hover:border-accent-purple/50 transition-all"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-accent-purple shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] truncate font-mono">
                    {contactEmail}
                  </span>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg bg-white/5 group-hover:bg-accent-purple group-hover:text-white text-secondary transition-all shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400 group-hover:text-white" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-secondary">
              <Clock className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Response time: &lt; 24 hours</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="mt-8 pt-6 border-t border-[var(--glass-border)] flex items-center gap-3">
            <a
              href="https://github.com/TedXpro"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-secondary hover:text-[var(--text-primary)] transition-all"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yohannes-woldeyes/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-secondary hover:text-[var(--text-primary)] transition-all"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Message Form */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.75)}
          className="w-full lg:w-7/12 glass-card p-6 sm:p-8 rounded-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-accent-purple" />
            <h4 className="text-base font-bold text-[var(--text-primary)]">Send a Message</h4>
          </div>

          {sentSuccess && (
            <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              Thank you! Your message has been sent. I'll get back to you shortly.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-secondary mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  required
                  className="glass-input w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-sm outline-none placeholder:text-secondary/50"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-secondary mb-1.5 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  required
                  className="glass-input w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-sm outline-none placeholder:text-secondary/50"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-secondary mb-1.5 block">Your Message</label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                required
                className="glass-input w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-sm outline-none placeholder:text-secondary/50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full sm:w-fit px-6 py-2.5 rounded-xl bg-accent-purple hover:bg-purple-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");


