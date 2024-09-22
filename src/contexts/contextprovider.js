import { createContext, useContext, useState } from "react";

// Initializing StateContext with default values
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const ContextProvider = ({ children }) => {
    // Initialize user with null to indicate no logged-in user initially
    const [user, setUser] = useState(null);
    
    // Initialize token from localStorage
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    // setToken function to update token and localStorage
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    return (
        <StateContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </StateContext.Provider>
    );
};

// Custom hook to access context with a safety check
export const useStateContext = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error("useStateContext must be used within a ContextProvider");
    }
    return context;
};
