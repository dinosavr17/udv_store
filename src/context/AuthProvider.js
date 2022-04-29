import { createContext, useState, useCallback, useEffect } from "react";
function noop() { }
const AuthContext = createContext({
    login: noop,
    logout: noop,
    token: null,
    userId: null,
});

export const AuthProvider = ({ children }) => {
    const storageName = 'userData'
    const [auth, setAuth] = useState({});
    const [token, setToken] = useState(null)

    const login = useCallback((jwtToken, id, name) => {
        setToken(jwtToken)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, userName: name
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
        <AuthContext.Provider value={{ auth, setAuth, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;