import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = (data) => {
  
      console.log(data);
      alert("Thank you for your message! I'll get back to you soon.");
      reset();

  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact <span className="text-indigo-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${
                    errors.name ? 'border-red-500 focus:ring-red-200' : 'border-white/20 focus:ring-indigo-300'
                  }`}
                  {...register("name", { required: 'Name is required' })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-white/20 focus:ring-indigo-300'
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
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${
                    errors.message ? 'border-red-500 focus:ring-red-200' : 'border-white/20 focus:ring-indigo-300'
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
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
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
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-indigo-400">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-indigo-300 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-indigo-400">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                    <a href="tel:+1234567890" className="text-white hover:text-indigo-300 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-indigo-400">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Location</h4>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-indigo-600 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-indigo-600 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}