import React from "react";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition hover:shadow-lg";

  const variants = {
    primary: "bg-[#00b4a0] text-[#0f1f3d] hover:bg-[#00a89a]",
    secondary: "bg-[#0f1f3d] text-white hover:bg-[#001a33]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#0f1f3d]",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
}
