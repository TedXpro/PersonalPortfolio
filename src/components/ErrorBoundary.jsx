import React, { Component } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

/**
 * Resilient Global Error Boundary
 * Catches 3D Canvas, WebGL, network, or component crashes gracefully.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an issue:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] w-full flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Application Interruption
              </h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                An unexpected graphics or network exception was caught. Your session remains secure.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 rounded-xl bg-accent-purple hover:bg-purple-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <a
                href="/"
                className="py-3 px-4 rounded-xl glass-card text-[var(--text-primary)] text-xs font-semibold flex items-center justify-center gap-2 hover:border-white/30 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
