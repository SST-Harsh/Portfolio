// ReusableComponents/InputFields.js
import { useTheme } from "../../Context/ThemeProvider";

const useInputFields = () => {
  const { theme } = useTheme();

  const labelClass =
    theme === "dark"
      ? "text-gray-200"
      : theme === "purple"
      ? "text-purple-900"
      : theme === "coffee"
      ? "text-amber-900"
      : "text-gray-800";

  const inputClass =
    theme === "dark"
      ? "text-gray-100 bg-gray-700 border-gray-600"
      : theme === "purple"
      ? "text-purple-900 bg-purple-50 border-purple-300"
      : theme === "coffee"
      ? "text-amber-900 bg-amber-50 border-amber-300"
      : "text-gray-800 bg-white border-gray-300";
      const placeholderClass =
    theme === "dark"
      ? "text-gray-400"
      : theme === "purple"
      ? "text-purple-500"
      : theme === "coffee"
      ? "text-amber-500"
      : "text-gray-500";

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
      validation: { required: "Name is required" },
      labelClassName: labelClass,
      inputClassName: inputClass,
      borderClass: borderClass,
      placeholderClass: placeholderClass
    },
    {
      name: "email",
      label: "Email Address *",
      type: "email",
      placeholder: "john@example.com",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      },
      labelClassName: labelClass,
      inputClassName: inputClass,
       borderClass:borderClass ,
      placeholderClass:placeholderClass
    },
    {
      name: "message",
      label: "Your Message *",
      type: "textarea",
      placeholder: "Tell me about your project...",
      rows: 5,
      validation: {
        required: "Message is required",
        minLength: {
          value: 20,
          message: "Message must be at least 20 characters",
        },
      },
      labelClassName: labelClass,
      inputClassName: inputClass,
      borderClass:borderClass,
      placeholderClass:placeholderClass
    },
  ];
};

export default useInputFields;
