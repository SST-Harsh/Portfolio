import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, } from "react-icons/fa";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import Form from "./ReusableComponents/Form";
import useInputFields from "./ReusableComponents/InputFields";
import { useTheme } from "../Context/ThemeProvider";
import {useAuth} from "../Context/AuthProvider";

// Theme-based styles
const themeStyles = {
  container: {
    light: "bg-gray-50 text-gray-800",
    dark: "bg-gray-900 text-gray-100",
    purple: "bg-purple-100 text-purple-900",
    coffee: "bg-amber-100 text-amber-900",
    default: "bg-gray-50 text-gray-800",
  },
  card: {
    light: "bg-white border border-gray-200",
    dark: "bg-gray-800 border border-gray-700",
    purple: "bg-purple-100 border border-purple-200",
    coffee: "bg-amber-100 border border-amber-200",
    default: "bg-white border border-gray-200",
  },
  text: {
    light: "text-gray-800",
    dark: "text-gray-100",
    purple: "text-purple-900",
    coffee: "text-amber-900",
    default: "text-gray-800",
  },
  link: {
    light: "text-indigo-600 hover:text-indigo-800",
    dark: "text-indigo-400 hover:text-indigo-300",
    purple: "text-purple-600 hover:text-purple-800",
    coffee: "text-amber-600 hover:text-amber-800",
    default: "text-indigo-600 hover:text-indigo-800",
  },
  secondaryText: {
    light: "text-gray-500",
    dark: "text-gray-400",
    purple: "text-purple-500",
    coffee: "text-amber-600",
    default: "text-gray-500",
  },
  button: {
    light: "bg-indigo-600 hover:bg-indigo-700",
    dark: "bg-indigo-400 hover:bg-indigo-500",
    purple: "bg-purple-600 hover:bg-purple-700",
    coffee: "bg-amber-600 hover:bg-amber-700",
    default: "bg-indigo-600 hover:bg-indigo-700",
  },
  buttonText: {
    light: "text-gray-100",
    dark: "text-gray-100",
    purple: "text-gray-100",
    coffee: "text-gray-100",
    default: "text-white",
  },
  icons: {
    light: "text-indigo-600 hover:text-indigo-800",
    dark: "text-indigo-400 hover:text-indigo-300",
    purple: "text-purple-600 hover:text-purple-800",
    coffee: "text-amber-600 hover:text-amber-800",
    default: "text-indigo-600 hover:text-indigo-800",
  },
};

const Contact = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const fields = useInputFields()
  const {showAlert}=useAuth()


  const styles = {
    container: themeStyles.container[theme] || themeStyles.container.default,
    card: themeStyles.card[theme] || themeStyles.card.default,
    text: themeStyles.text[theme] || themeStyles.text.default,
    link: themeStyles.link[theme] || themeStyles.link.default,
    secondaryText:
      themeStyles.secondaryText[theme] || themeStyles.secondaryText.default,
    button: themeStyles.button[theme] || themeStyles.button.default,
    buttonText:
      themeStyles.buttonText[theme] || themeStyles.buttonText.default,
    icons: themeStyles.icons[theme] || themeStyles.icons.default,
  };

  const handleFormSubmit = async (data) => {
    try {
      const formData = JSON.stringify(data);
      localStorage.setItem("Contact form data", formData);
      showAlert("Thank you for your message! I'll get back to you soon.","success");
    } catch (error) {
      console.error("Failed to save form data", error);
    }
  };

  // Animations
  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 },
    },
  };
  const fadeInLeft = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 },
    },
  };
  const fadeInRight = {
    hidden: { x: 50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 },
    },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section ref={ref} id="Contact" className={`py-20 px-4 ${styles.container}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-3xl md:text-4xl font-bold mb-4 ${styles.text}`}
          >
            Contact <span className={`${styles.link}`}>Me</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-lg max-w-2xl mx-auto ${styles.secondaryText}`}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInLeft}
            className="w-full max-w-md mx-auto md:h-96"
          >
            <Form
              fields={fields}
              onSubmit={handleFormSubmit}
              buttonText="Send Message"
              border={`${styles.card}`}
              buttonClassName={`${styles.button} ${styles.buttonText}`}
            />
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInRight}
            className="lg:w-1/2 space-y-8"
          >
            <motion.div
              variants={staggerContainer}
              className={`rounded-xl p-8 ${styles.card}`}
            >
              <motion.h3
                variants={staggerItem}
                className={`text-xl font-semibold mb-6 ${styles.text}`}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-6">
                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className={`mt-1 ${styles.icons}`}>
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${styles.secondaryText}`}>
                      Email
                    </h4>
                    <a
                      href="mailto:harshpalsingh565@gmail.com"
                      className={`${styles.text} hover:underline`}
                    >
                      harshpalsingh565@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className={`mt-1 ${styles.icons}`}>
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${styles.secondaryText}`}>
                      Phone
                    </h4>
                    <a
                      href="tel:+917748982114"
                      className={`${styles.text} hover:underline`}
                    >
                      +91 774 898 2114
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className={`mt-1 ${styles.icons}`}>
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${styles.secondaryText}`}>
                      Location
                    </h4>
                    <p className={`${styles.text}`}>Ahmedabad</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className={`rounded-xl p-8 ${styles.card}`}
            >
              <motion.h3
                variants={staggerItem}
                className={`text-xl font-semibold mb-6 ${styles.text}`}
              >
                Follow Me
              </motion.h3>
              <motion.div className="flex gap-4">
                <motion.a
                  variants={staggerItem}
                  href="https://github.com/harshps900"
                  target="_blank"
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${styles.card} hover:opacity-90`}
                  aria-label="GitHub"
                >
                  <FaGithub className={`w-5 h-5 ${styles.icons}`} />
                </motion.a>
                <motion.a
                  variants={staggerItem}
                  href="https://www.linkedin.com/in/harsh-pal-singh-8583a2190/"
                  target="_blank"
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${styles.card} hover:opacity-90`}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className={`w-5 h-5 ${styles.icons}`} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
