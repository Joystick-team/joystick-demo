import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext(null)

export const useTheme = () => {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {

    const [themeDetector, setThemeDetector] = useState((localStorage.getItem('theme-dark') === null) || 'light')


    // const [theme, setTheme] = useState('light')

    // const toggleTheme = useCallback(() => {
    //     setTheme((prev) => !prev)
    // })

  return (
    <>
        <ThemeContext.Provider value={[themeDetector, setThemeDetector]}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}
