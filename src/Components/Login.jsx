import Form from "./ReusableComponents/Form";
import LoginField from "./ReusableComponents/LoginField";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
    const { login, isLoggedIn } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) navigate('/')
    }, [isLoggedIn, navigate])
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

    return (
        <div className="flex flex-row mt-50 items-center justify-center w-full md:max-w-5xl  mx-auto h-auto   p-4">
            <div className="flex flex-col md:flex-row w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl">
                {/* Left Side */}
                <div className="hidden md:flex flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex-col justify-center items-center">
                    <div className="max-w-xs">
                        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                        <p className="text-sm text-blue-100 text-center mb-6">
                            Enter your credentials to access your account and continue your journey with us.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 p-8 md:p-10">
                    <div className="max-w-md ">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
                            <p className="text-gray-600">Please enter your login details</p>
                        </div>

                        <Form
                            fields={LoginField}
                            onSubmit={handleLogin}
                            buttonText="Login"
                            buttonClassName="text-white"
                        />

                        <div className="mt-6 text-center">
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                                Forgot password?
                            </a>
                            <p className="mt-4 text-sm text-gray-600">
                                Don't have an account?{' '}
                                <button
                                    onClick={() => navigate('/register')}
                                    className="font-medium text-indigo-600 hover:text-indigo-800"
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