import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./ReusableComponents/Form";
import useRegisterField from "./ReusableComponents/RegisterField";
import { useAuth } from "../Context/AuthProvider";
import { useTheme } from "../Context/ThemeProvider"; // ✅ import theme context

export default function Register() {
    const { register, isRegistered } = useAuth();
    const { theme } = useTheme(); // ✅ get current theme
    const navigate = useNavigate();

    // ✅ Theme-based styles (same structure you used in Practice.jsx)
    const themeStyles = {
        container: {
            light: "bg-gray-50 text-gray-800",
            dark: "bg-gray-900 text-gray-100",
            purple: "bg-purple-50 text-purple-900",
            coffee: "bg-amber-50 text-amber-900",
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
            light: "text-gray-600",
            dark: "text-gray-300",
            purple: "text-purple-700",
            coffee: "text-amber-700",
            default: "text-gray-600",
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
        gradient: {
            light: "bg-gradient-to-br from-blue-600 to-indigo-700",
            dark: "bg-gradient-to-br from-gray-700 to-gray-900",
            purple: "bg-gradient-to-br from-purple-500 to-purple-700",
            coffee: "bg-gradient-to-br from-amber-600 to-orange-800",
            default: "bg-gradient-to-br from-blue-600 to-indigo-700",
        }, button: {
            light: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
            dark: "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950",
            purple: "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800",
            coffee: "bg-gradient-to-r from-amber-600 to-orange-800 hover:from-amber-700 hover:to-orange-900",
            default: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        }

    };


    const styles = {
        container: themeStyles.container[theme] || themeStyles.container.default,
        card: themeStyles.card[theme] || themeStyles.card.default,
        text: themeStyles.text[theme] || themeStyles.text.default,
        link: themeStyles.link[theme] || themeStyles.link.default,
        secondaryText: themeStyles.secondaryText[theme] || themeStyles.secondaryText.default,
    };

    useEffect(() => {
        if (isRegistered) navigate("/login");
    }, [isRegistered, navigate]);

    const handleRegister = async (formData) => {
        const success = await register(formData);
        if (success) navigate("/login");
    };
 const fields = useRegisterField(); 

    return (
        <div className={`flex items-center justify-center h-screen p-4 ${styles.container}`}>
            <div className={`flex flex-c  ol md:flex-row w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${styles.card}`}>
                {/* Left Side - Illustration */}
                <div className={`hidden md:flex flex-1 ${themeStyles.gradient[theme] || themeStyles.gradient.default} text-white p-8 flex-col justify-center items-center`}>
                    <div className="max-w-xs">
                        <h2 className="text-3xl font-bold mb-4">Join Us!</h2>
                        <p className="text-sm text-blue-100 text-center mb-6">
                            Create your account to start your journey with us.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 p-8 md:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <h2 className={`text-3xl font-bold mb-2 ${styles.text}`}>Create Account</h2>
                            <p className={styles.secondaryText}>Fill in your details to register</p>
                        </div>

                        <Form
                             fields={fields} 
                            onSubmit={handleRegister}
                            buttonText="Register"
                            buttonClassName={`w-full ${themeStyles.button[theme] || themeStyles.button.default} text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]`}
                        />

                        <div className="mt-6 text-center">
                            <p className={`text-sm ${styles.secondaryText}`}>
                                Already have an account?{" "}
                                <button
                                    onClick={() => navigate("/login")}
                                    className={`font-medium ${styles.link}`}
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
