import {createContext, useState, useContext} from 'react';
import currentTheme from '../lib/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState(currentTheme)


    return (
        <ThemeContext.Provider value={{theme, setTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)