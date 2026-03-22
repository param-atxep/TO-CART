import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here or send to a service
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Something went wrong.</h1>
          <p className="mb-2 text-slate-600">An unexpected error occurred. Please try refreshing the page.</p>
          {process.env.NODE_ENV === "development" && (
            <pre className="bg-slate-100 p-4 rounded text-left text-xs overflow-x-auto max-w-xl mx-auto mt-4">
              {this.state.error?.toString()}
            </pre>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
