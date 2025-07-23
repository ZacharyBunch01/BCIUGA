import React from "react";

export function Card({ children }) {
  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-left ${className}`}>{children}</div>;
}

