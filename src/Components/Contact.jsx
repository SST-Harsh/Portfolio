import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import {  motion } from "framer-motion";
import { forwardRef } from 'react';
import Form from './ReusableComponents/Form';
import InputFields from './ReusableComponents/InputFields';

const Contact = forwardRef(( props,ref)=> {
  
  const handleFormSubmit = async (data) => {
    try {
      const formData = JSON.stringify(data);
      localStorage.setItem("Contact form data", formData);
      alert("Thank you for your message! I'll get back to you soon.");
    } catch (error) {
      console.error("Failed to save form data", error);
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
    <section ref={ref} id="Contact" className="py-20 px-4  bg-gray-800">
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
              className='w-full max-w-md mx-auto md:h-96'
             
            >
              {/* reusable Form for conatct  */}


              <Form
                fields={InputFields} //reusable fields
                onSubmit={handleFormSubmit}
                buttonText="Send Message"
                

              />
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
                    <a href="mailto:harshpalsingh565@gmail.com" className="text-white hover:text-indigo-300 transition-colors">
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
                    <a href="tel:+917748982114" className="text-white hover:text-indigo-300 transition-colors">
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

                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-indigo-600 rounded-full transition-colors"
                  aria-label="GitHub"

                >
                  <FaGithub className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  variants={staggerItem}
                  href="https://www.linkedin.com/in/harsh-pal-singh-8583a2190/"
                  target="_blank"

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
})
export default Contact