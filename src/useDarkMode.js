import { useState, useEffect } from 'react'

export const useDarkMode = () => {
    const [ theme, setTheme ] = useState('dark');

    const setMode = mode => {
       localStorage.setItem('theme', mode);
        setTheme(mode);
    }

    const toggleTheme = () => {
        theme === 'dark' ? setMode('light') : setMode('dark');
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('dark');
    }, []);

    return [ theme, toggleTheme ];
}