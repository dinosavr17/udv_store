import { createContext, useState, useCallback, useEffect } from "react";
function noop() { }
const AuthContext = createContext({
    accessToken: null,
    login: noop,
    logout: noop,
});
const storageName = 'userData'
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [token, setToken] = useState(null)
    const login = useCallback((jwtToken, email ) => {
        setToken(jwtToken)

        localStorage.setItem(storageName, JSON.stringify({
             accessToken: jwtToken, email: email,
        }))

    }, [])
    const logout = useCallback(() => {
        setToken(null)
        localStorage.removeItem(storageName)
    }, [])
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token);

        }
    }, [login])
    return (
        <AuthContext.Provider value={{auth, setAuth, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;