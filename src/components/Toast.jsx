import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, AlertTriangle } from "lucide-react";

export const Toast = ({ message, type = "success", isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-24 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-panel shadow-2xl border border-white/20 dark:border-white/10"
        >
          {type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          {type === "info" && <Info className="w-5 h-5 text-cyan-400 shrink-0" />}
          {type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />}
          
          <span className="text-[14px] font-medium text-[var(--text-primary)]">
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
