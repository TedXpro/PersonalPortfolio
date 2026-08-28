import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Toast,
  Footer,
} from "./components";

const App = () => {
  const [toast, setToast] = useState({ message: "", isVisible: false, type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ message, isVisible: true, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[var(--primary)] min-h-screen transition-colors duration-500 overflow-x-hidden text-[var(--text-primary)]">
        {/* Subtle Background Mesh */}
        <div className="fixed inset-0 pointer-events-none bg-liquid-mesh opacity-60 z-0" />

        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-accent-purple/10 via-accent-cyan/5 to-transparent blur-3xl pointer-events-none z-0" />

        {/* Standard Top Header Navigation */}
        <Navbar />

        {/* Hero Section */}
        <div className="relative z-10">
          <Hero />
        </div>

        {/* Core Content Flow */}
        <main className="relative z-10 pb-16">
          <About />
          <Works />
          <Experience />
          
          <div className="relative z-10 mt-12">
            <Contact onShowToast={showToast} />
          </div>
        </main>

        {/* Standard Multi-Column Footer */}
        <Footer />

        {/* Lightweight Toast Alert */}
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;



