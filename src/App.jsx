import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Toast,
  Footer,
  WorksSkeleton,
  ExperienceSkeleton,
  ContactSkeleton,
  ErrorBoundary,
} from "./components";

// Code-split below-the-fold heavy feature sections for lightning-fast initial load
const Works = lazy(() => import("./components/Works"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [toast, setToast] = useState({ message: "", isVisible: false, type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ message, isVisible: true, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="relative z-0 bg-[var(--primary)] min-h-screen transition-colors duration-500 overflow-x-hidden text-[var(--text-primary)]">
          {/* Subtle Background Mesh */}
          <div className="fixed inset-0 pointer-events-none bg-liquid-mesh opacity-60 z-0" />

          {/* Ambient Top Glow */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-accent-purple/10 via-accent-cyan/5 to-transparent blur-3xl pointer-events-none z-0" />

          {/* Standard Top Header Navigation */}
          <Navbar />

          {/* Eagerly Loaded Above-the-Fold Hero Section */}
          <div className="relative z-10">
            <Hero />
          </div>

          {/* Core Content Flow with Exact-Structure Suspense Skeletons */}
          <main className="relative z-10 pb-16">
            <About />

            <Suspense fallback={<WorksSkeleton />}>
              <Works />
            </Suspense>

            <Suspense fallback={<ExperienceSkeleton />}>
              <Experience />
            </Suspense>

            <div className="relative z-10 mt-12">
              <Suspense fallback={<ContactSkeleton />}>
                <Contact onShowToast={showToast} />
              </Suspense>
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
    </ErrorBoundary>
  );
};

export default App;




