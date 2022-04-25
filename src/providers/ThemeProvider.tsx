import { useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import React, { ReactChild } from 'react';

const ThemeProvider: React.FC<{children: ReactChild}> = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}> 
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;