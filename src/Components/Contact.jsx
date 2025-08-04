import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = (data) => {
    try {
      const formdata = JSON.stringify(data)
      localStorage.setItem("Contact form data", formdata)
      console.log(data)
      alert("Thank you for your message! I'll get back to you soon.");
      reset();
    }catch(error){
      console.error("failed to save form data",error)

    }
  };

  // Animation variants defined directly in component
  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const fadeInLeft = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const fadeInRight = {
    hidden: { x: 50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800">
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
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Contact <span className="text-indigo-400">Me</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
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
            className="lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-white/20 focus:ring-indigo-300'
                    }`}
                  {...register("name", { required: 'Name is required' })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                )}
              </motion.div>

              <motion.div variants={staggerItem}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-white/20 focus:ring-indigo-300'
                    }`}
                  {...register("email", {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                )}
              </motion.div>

              <motion.div variants={staggerItem}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-white/20 focus:ring-indigo-300'
                    }`}
                  {...register("message", {
                    required: 'Message is required',
                    minLength: {
                      value: 20,
                      message: 'Message must be at least 20 characters'
                    }
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                )}
              </motion.div>

              <motion.div variants={staggerItem}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}

                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInRight}
            className="lg:w-1/2 space-y-8"
          >
            <motion.div
              variants={staggerContainer}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <motion.h3 variants={staggerItem} className="text-xl font-semibold text-white mb-6">Contact Information</motion.h3>
              <div className="space-y-6">
                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="mt-1 text-indigo-400">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-indigo-300 transition-colors">
                      harshpalsingh565@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="mt-1 text-indigo-400">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                    <a href="tel:+1234567890" className="text-white hover:text-indigo-300 transition-colors">
                      +91 774 898 2114
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="mt-1 text-indigo-400">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Location</h4>
                    <p className="text-white">Ahmedabad</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <motion.h3 variants={staggerItem} className="text-xl font-semibold text-white mb-6">Follow Me</motion.h3>
              <motion.div className="flex gap-4">
                <motion.a
                  variants={staggerItem}
                  href="https://github.com/harshps900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-indigo-600 rounded-full transition-colors"
                  aria-label="GitHub"

                >
                  <FaGithub className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  variants={staggerItem}
                  href="https://www.linkedin.com/in/harsh-pal-singh-8583a2190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-indigo-600 rounded-full transition-colors"
                  aria-label="LinkedIn"

                >
                  <FaLinkedin className="w-5 h-5 text-white" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}