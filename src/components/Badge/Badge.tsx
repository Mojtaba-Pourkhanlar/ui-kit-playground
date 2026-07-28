import React from "react";

interface BadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export const Badge = ({
  label,
  variant = "primary",
  size = "md",
  onClick,
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none";

  const variantStyles = {
    primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    danger: "bg-red-100 text-red-800 hover:bg-red-200",
    info: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-0.75 text-sm",
    lg: "px-4 py-1 text-base",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </span>
  );
};
