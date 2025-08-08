import Form from "./ReusableComponents/Form";
import useLoginField from "./ReusableComponents/LoginField";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeProvider";

export default function Login() {
    const { login, isLoggedIn } = useAuth();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn, navigate]);

    const handleLogin = (formData) => {
        try {
            const success = login(formData);
            if (success) {
                navigate('/');
            }
        } catch (error) {
            setFormError("Login failed. Please try again.");
        }
    };
    const fields=useLoginField()
    // Theme-based styles
    const themeStyles = {
        container: {
            light: "bg-gray-50 text-gray-800",
            dark: "bg-gray-900 text-gray-100",
            purple: "bg-purple-50 text-purple-900",
            coffee: "bg-amber-50 text-amber-900",
            default: "bg-gray-50 text-gray-800"
        },
        card: {
            light: "bg-white border-gray-200",
            dark: "bg-gray-800 border-gray-700",
            purple: "bg-purple-100 border-purple-200",
            coffee: "bg-amber-100 border-amber-200",
            default: "bg-white border-gray-200"
        },
        gradient: {
            light: "from-blue-600 to-indigo-700",
            dark: "from-gray-800 to-gray-900",
            purple: "from-purple-700 to-purple-900",
            coffee: "from-amber-700 to-amber-900",
            default: "from-blue-600 to-indigo-700"
        },
        text: {
            light: "text-gray-600",
            dark: "text-gray-300",
            purple: "text-purple-700",
            coffee: "text-amber-700",
            default: "text-gray-600"
        },
        link: {
            light: "text-indigo-600 hover:text-indigo-800",
            dark: "text-indigo-400 hover:text-indigo-300",
            purple: "text-purple-600 hover:text-purple-800",
            coffee: "text-amber-600 hover:text-amber-800",
            default: "text-indigo-600 hover:text-indigo-800"
        }
    };

    return (
        <div className={`flex min-h-screen items-center justify-center p-4 ${themeStyles.container[theme] || themeStyles.container.default}`}>
            <div className={`flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${themeStyles.card[theme] || themeStyles.card.default}`}>
                {/* Left Side */}
                <div className={`hidden md:flex flex-1 bg-gradient-to-br p-8 flex-col justify-center items-center ${themeStyles.gradient[theme] || themeStyles.gradient.default}`}>
                    <div className="max-w-xs">
                        <h2 className="text-3xl font-bold mb-4 text-white">Welcome Back!</h2>
                        <p className="text-sm text-blue-100 text-center mb-6">
                            Enter your credentials to access your account and continue your journey with us.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 p-8 md:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <h2 className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                                Sign In
                            </h2>
                            <p className={themeStyles.text[theme] || themeStyles.text.default}>
                                Please enter your login details
                            </p>
                        </div>

                        {formError && (
                            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                                {formError}
                            </div>
                        )}

                        <Form
                            fields={fields}
                            onSubmit={handleLogin}
                            buttonText="Login"
                            buttonClassName={`w-full ${theme === 'light' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-700 hover:bg-indigo-600'} text-white py-2 px-4 rounded-md transition-colors`}
                        />

                        <div className="mt-6 text-center">
                            <a href="#" className={`text-sm font-medium ${themeStyles.link[theme] || themeStyles.link.default}`}>
                                Forgot password?
                            </a>
                            <p className={`mt-4 text-sm ${themeStyles.text[theme] || themeStyles.text.default}`}>
                                Don't have an account?{' '}
                                <button
                                    onClick={() => navigate('/register')}
                                    className={`font-medium ${themeStyles.link[theme] || themeStyles.link.default}`}
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}