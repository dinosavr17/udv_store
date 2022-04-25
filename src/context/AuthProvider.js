import { createContext, useState } from "react";
function noop() { }
const AuthContext = createContext({
    login: noop,
    logout: noop,
    token: null,
    userId: null,
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;