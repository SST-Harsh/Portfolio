const InputFields = [
  {
    name: "name",
    label: "Full Name *",
    type: "text",
    placeholder: "John Doe",
    validation: { required: "Name is required" },
     labelClassName:"text-white",
    inputClassName:" text-white",
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
     labelClassName:"text-white",
    inputClassName:" text-white",
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
        value: 5,
        message: "Message must be at least 20 characters",
      },
    },
    labelClassName:"text-white",
    inputClassName:" text-white",
  },
  
];

export default InputFields;
