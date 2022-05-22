import Layout from './components/Layout';
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Orders} from "./pages/Orders";
import {UserInfo} from "./pages/UserInfo";
import {SignUp} from "./pages/SignUp";
import {SignIn} from "./pages/SignIn";
import RequireAuth from './components/RequireAuth';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import LinkPage from "./components/LinkPage";
import './App.css';
import {useEffect} from "react";
import {useState} from "react";
import {useDarkMode} from "./useDarkMode";
import useAuth from "./hooks/useAuth";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Toggle from "./components/Toggle";
import {AdminBalance} from "./pages/AdminBalance";
import {AdminHome} from "./pages/AdminHome";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`
function App() {

    const {login, logout}=useAuth()
    const navigate = useNavigate();
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    useEffect(()=>{

        // const localStorageData=JSON.parse(localStorage.getItem("userData"))
        // login(localStorageData.accessToken,localStorageData.email)
        // localStorageData.accessToken && navigate("/")
    },[])

    return (
        <ThemeProvider theme={themeMode}>
            <StyledApp>
            <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route path="linkpage" element={<LinkPage />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path='adm-balance' element={<AdminBalance/>}/>
                <Route path='adm-home' element={<AdminHome/>}/>
                {/* we want to protect these routes element={RequireAuth/>*/}
                <Route  element={<RequireAuth/>}>
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="about" element={<UserInfo />} />
                </Route>

                {/* catch all */}
            {/*    <Route path="*" element={<Missing />} />*/}
            </Route>
        </Routes>
            </StyledApp>
            </ThemeProvider>
    );
}

export default App;