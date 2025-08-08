import { useTheme } from "../../Context/ThemeProvider"; 

const useLoginField = () => {
  const { theme } = useTheme();

  const labelClass = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const inputClass = theme === "dark" ? "text-gray-100 bg-gray-700" : "text-gray-800 bg-white";
  const borderClass=theme === "dark" ? "border-gray-600" : "border-gray-300"

  return [
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
      labelClassName: labelClass,
      inputClassName: inputClass,
      borderClass:borderClass
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      autoComplete: "off",
      placeholder: "Enter your password",
      validation: {
        required: "Password is required",
      },
      labelClassName: labelClass,
      inputClassName: inputClass,
      borderClass: borderClass
    },
  ];
};

export default useLoginField;
