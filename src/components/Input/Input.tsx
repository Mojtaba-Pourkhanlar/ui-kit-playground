import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = ({
  label,
  error,
  helperText,
  id,
  disabled,
  className = "",
  ...props
}: InputProps) => {
  const inputId =
    id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  const baseInputStyles =
    "w-full rounded-lg border px-3.5 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed";

  const stateStyles = error
    ? "border-red-500 text-red-900 focus:border-red-500 focus:ring-red-200"
    : "border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-100";

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold tracking-wide text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        disabled={disabled}
        className={`${baseInputStyles} ${stateStyles} ${className}`}
        {...props}
      />

      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
};
