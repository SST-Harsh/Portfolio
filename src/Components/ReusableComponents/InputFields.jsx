const InputFields = [
  {
    name: "name",
    label: "Full Name *",
    type: "text",
    placeholder: "John Doe",
    validation: { required: "Name is required" },
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
  },
  // {
  //   name: "password",
  //   label: "Password",
  //   type: "password",
  //   autoComplete: "off", 
  //   placeholder: "Enter your password",
  //   validation: {
  //     required: "Password is required",
  //   },
  // },
  {
    name: "message",
    label: "Your Message *",
    type: "textarea",
    placeholder: "Tell me about your project...",
    rows: 5,
    validation: {
      required: "Message is required",
      minLength: {
        value: 5,
        message: "Message must be at least 20 characters",
      },
    },
  },
];

export default InputFields;
