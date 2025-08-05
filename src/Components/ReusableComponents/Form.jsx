import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
export default function Form(
    { onSubmit,
        fields = [],
        buttonText = "Submit",

    }) {
    // Animation variants defined directly in component
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
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const handleFormData = (data) => {
        onSubmit(data)
        reset()

    }
    return (
        <div 
        className="w-full max-w-md mx-auto shadow-md bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4  md:mb-200 border border-white/10">
            <motion.form
                onSubmit={handleSubmit(handleFormData)}
                className="space-y-6 h-auto"
                // autoComplete="off"
                variants={staggerContainer}
            >
                {/* all fields to show  */}
                {fields.map((field) => (
                    <motion.div key={field.name} variants={staggerItem}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
                            {field.label}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea
                                id={field.name}
                                placeholder={field.placeholder}
                                rows={field.rows || 4}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${errors[field.name] ? "border-red-500 focus:ring-red-200" : "border-white/20 focus:ring-indigo-300"
                                    }`}
                                {...register(field.name, field.validation)}
                                aria-invalid={errors[field.name] ? "true" : "false"}
                            />
                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                autoComplete="off"
                                placeholder={field.placeholder}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${errors[field.name] ? "border-red-500 focus:ring-red-200" : "border-white/20 focus:ring-indigo-300"
                                    }`}
                                {...register(field.name, field.validation)}
                                aria-invalid={errors[field.name] ? "true" : "false"}
                            />
                        )}

                        {errors[field.name] && (
                            <p className="mt-2 text-sm text-red-400">{errors[field.name].message}</p>
                        )}
                    </motion.div>
                ))}
                <motion.div variants={staggerItem}>
                    <button
                        type="submit"

                        className={`w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800`}

                    >{buttonText}
                    </button>
                </motion.div>




            </motion.form>
        </div>
    )
}