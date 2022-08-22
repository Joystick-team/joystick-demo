import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext(null)

export const useTheme = () => {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem('theme-dark') ?? 'light')

    // const toggleTheme = useCallback(() => {
    //     setTheme((prev) => !prev)
    // })

  return (
    <>
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}
