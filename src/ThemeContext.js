import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext(null)

export const useTheme = () => {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
  function getDeviceTheme() {
    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  }
  const deviceTheme = getDeviceTheme()
  // console.log('deviceTheme ', deviceTheme);
    const [themeDetector, setThemeDetector] = useState(localStorage.getItem('dark') ?? deviceTheme)


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
