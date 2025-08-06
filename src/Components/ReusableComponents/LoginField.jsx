const LoginField = [
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
   labelClassName: "text-gray-800 ",
    inputClassName: " text-gray-800",
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
    labelClassName: "text-gray-800 ",
    inputClassName: " text-gray-800",
  },
];

export default LoginField;
