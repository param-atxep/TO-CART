"use client";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function ClientRoot({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
