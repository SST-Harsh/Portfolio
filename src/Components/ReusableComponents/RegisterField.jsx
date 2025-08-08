// RegisterField.js
import { useTheme } from "../../Context/ThemeProvider";

export default function useRegisterField() {
  const { theme } = useTheme();

  const labelColors = {
    light: "text-gray-800",
    dark: "text-gray-200",
    purple: "text-purple-900",
    coffee: "text-amber-900",
    default: "text-gray-800",
  };

  const inputColors = {
    light: "text-gray-800 bg-white",
    dark: "text-gray-100 bg-gray-700",
    purple: "text-purple-900 bg-purple-50",
    coffee: "text-amber-900 bg-amber-50",
    default: "text-gray-800 bg-white",
  };

  const borderClass =
    theme === "dark"
      ? "border-gray-600"
      : theme === "purple"
      ? "border-purple-300"
      : theme === "coffee"
      ? "border-amber-300"
      : "border-gray-300";

  return [
    {
      name: "name",
      label: "Full Name *",
      type: "text",
      placeholder: "John Doe",
      validation: {
        required: "Name is required",
        minLength: { value: 2, message: "Name must be at least 2 characters" },
        maxLength: { value: 50, message: "Name cannot exceed 50 characters" },
      },
      labelClassName: labelColors[theme] || labelColors.default,
      inputClassName: inputColors[theme] || inputColors.default,
      borderClass
    },
    {
      name: "email",
      label: "Email Address *",
      type: "email",
      placeholder: "john@example.com",
      autoComplete: "off",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email address",
        },
      },
      labelClassName: labelColors[theme] || labelColors.default,
      inputClassName: inputColors[theme] || inputColors.default,
      borderClass
    },
    {
      name: "password",
      label: "Password *",
      type: "password",
      autoComplete: "new-password",
      placeholder: "Create a password",
      validation: {
        required: "Password is required",
        minLength: { value: 8, message: "Password must be at least 8 characters" },
        validate: (value) => {
          if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
          if (!/[a-z]/.test(value)) return "Must contain at least one lowercase letter";
          if (!/[0-9]/.test(value)) return "Must contain at least one number";
          if (!/[^A-Za-z0-9]/.test(value)) return "Must contain at least one special character";
          return true;
        },
      },
      labelClassName: labelColors[theme] || labelColors.default,
      inputClassName: inputColors[theme] || inputColors.default,
      borderClass
    },
    {
      name: "confirmPassword",
      label: "Confirm Password *",
      type: "password",
      autoComplete: "new-password",
      placeholder: "Re-enter your password",
      validation: {
        required: "Please confirm your password",
        validate: (value, { password }) =>
          value === password || "Passwords do not match",
      },
      labelClassName: labelColors[theme] || labelColors.default,
      inputClassName: inputColors[theme] || inputColors.default,
      borderClass
    },
  ];
}
