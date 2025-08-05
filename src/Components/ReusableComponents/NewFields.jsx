const NewFields = [
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
  {
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "off", 
    placeholder: "Enter your password",
    validation: {
      required: "Password is required",
    },
  },
 
];

export default NewFields;
