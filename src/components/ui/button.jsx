import React from "react";

export default function Button({ children, asChild, ...props }) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      {...props}
      className="inline-block bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors"
    >
      {children}
    </Comp>
  );
}

