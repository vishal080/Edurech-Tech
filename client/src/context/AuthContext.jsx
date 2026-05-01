import { createContext, useContext, useState } from "react";

// create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);

    return (
        <AuthContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};