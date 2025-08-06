import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./ReusableComponents/Form";
import RegisterField from "./ReusableComponents/RegisterField";
import { useAuth } from "../Context/AuthProvider";

export default function Register() {
    const { register, isRegistered, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isRegistered) navigate("/login");
    }, [isRegistered, navigate]);

    const handleRegister = async (formData) => {
        const success = await register(formData);
        if (success) navigate("/login");
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-160px)] p-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex-col justify-center items-center">
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
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                            <p className="text-gray-600">Fill in your details to register</p>
                        </div>

                        <Form
                            fields={RegisterField}
                            onSubmit={handleRegister}
                            buttonText="Register"
                            buttonClassName="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]"
                        />

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <button
                                    onClick={() => navigate("/login")}
                                    className="font-medium text-indigo-600 hover:text-indigo-800"
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