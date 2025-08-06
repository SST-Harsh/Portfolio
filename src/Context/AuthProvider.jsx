import { createContext, useContext, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import LockIcon from "@mui/icons-material/Lock";
import ErrorIcon from "@mui/icons-material/Error";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "info",
    });

    //  auth state from sessionStorage
    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        const storedLogin = sessionStorage.getItem("isLoggedIn");

        if (storedUser && storedLogin === "true") {
            try {
                setUser(JSON.parse(storedUser));
                setIsLoggedIn(true);
            } catch (error) {
                console.error("Failed to parse user data", error);
                sessionStorage.clear("user");
                sessionStorage.clear("isLoggedIn");
            }
        }
        setLoading(false);
    }, []);


    const showAlert = (message, severity = "info") => {
        setAlert({ open: true, message, severity });
    };
    // Register 
    const register = (userData) => {
        try {
            const storedData = sessionStorage.getItem("registerData");
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                if (parsedData.email === userData.email) {
                    showAlert("Email already exists!", "warning");
                    setIsRegistered(false)
                    return false;
                }
            }

            sessionStorage.setItem("registerData", JSON.stringify(userData));
            setUser(userData);
            setIsRegistered(true);
            showAlert("Registered successfully!", "success");
            return true;
        } catch (error) {
            console.error("Registration failed:", error);
            showAlert("Registration failed. Please try again.", "error");
            return false;
        }
    };

    //  login with basic validation
    const login = (userData) => {
        try {
            const storedData = sessionStorage.getItem('registerData');
            if (!storedData) {
                showAlert("No registered user found", "error");
                return false;
            }

            const parsedData = JSON.parse(storedData);

            if (
                userData.email === parsedData.email &&
                userData.password === parsedData.password
            ) {
                setUser(parsedData);
                setIsLoggedIn(true);
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("user", JSON.stringify(parsedData));
                showAlert("Logged in successfully!", "success");
                return true;
            } else {
                showAlert("Invalid email or password", "error");
                return false;
            }
        } catch (error) {
            console.error("Login error:", error);
            showAlert("Login failed. Please try again.", "error");
            return false;
        }
    };


    // Enhanced logout with 
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        sessionStorage.clear("isLoggedIn");
        sessionStorage.clear("user");
        showAlert("Logged out successfully", "error");
    };



    const getAlertIcon = (severity) => {
        switch (severity) {
            case "error":
                return <ErrorIcon fontSize="inherit" />;
            case "success":
                return <CheckIcon fontSize="inherit" />;
            case "warning":
                return <LockIcon fontSize="inherit" />;
            default:
                return null;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn, isRegistered, loading, user, logout, login, register, showAlert,
            }}
        >
            {children}

            <Snackbar
                open={alert.open}
                autoHideDuration={4000}
                onClose={() => setAlert({ ...alert, open: false })}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                sx={{
                    width: { xs: "90%", sm: "60%", md: "40%" },
                    zIndex: 1400,
                    marginTop: "80px"
                }}
            >
                <Alert
                    onClose={() => setAlert({ ...alert, open: false })}
                    severity={alert.severity}
                    icon={getAlertIcon(alert.severity)}
                    sx={{
                        width: "100%",
                        alignItems: "center",
                        boxShadow: 3
                    }}
                    variant="filled"
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </AuthContext.Provider>
    );
}