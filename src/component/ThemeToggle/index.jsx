import { useState, useEffect, useCallback } from "react";
// import { FaSun } from "../../assets/svgs/icons"
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "../../ThemeContext";
import "./themeToggle.style.scss";

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);
    // eslint-disable-next-line
    const [htmlRef, setHtmlRef] = useState(null);
    const [themeDetector, setThemeDetector] = useTheme()
    const html = document.querySelector('html');

    // let themeSet = htmlRef.dataset.theme;
    let themeData = localStorage.getItem('theme-dark');
    useEffect(() => {
        
        if(html){
            setHtmlRef(html);
            if(themeData === "dark"){
                setDark(true);
                setDark(`(prefers-color-scheme: ${themeData})`)
                if(themeDetector === 'dark'){
                  html.setAttribute('data-theme', 'dark')
                }else{
                  html.setAttribute('data-theme', 'light')
                }
                setThemeDetector(themeData)
            }
            html.dataset.theme = themeData
            setThemeDetector(themeData)
            // window.matchMedia(`(prefers-color-scheme: ${themeData})`)
        }
    },[html, themeDetector, setThemeDetector, themeData])


    useEffect(() => {
        if(!htmlRef){
            return;
        }
        if(dark){
            localStorage.setItem('dark', 'dark');
            htmlRef.dataset.theme = "dark";
        }else{
            localStorage.setItem('dark', 'light');
            htmlRef.dataset.theme = "light";
        }
        window.matchMedia(`(prefers-color-scheme: ${themeDetector})`)
    },[dark, htmlRef, themeDetector])

    const toggleTheme = useCallback( async () => {
      setThemeDetector((prev) => (themeDetector === 'dark' ? 'light' : 'dark'))
      setDark(prev => !prev)
      if(!dark){
        if(themeDetector === 'dark'){
          html.setAttribute('data-theme', 'light')
        }else{
          html.setAttribute('data-theme', 'dark')
        }
        localStorage.setItem('theme-dark', 'dark');
          htmlRef.dataset.theme = "dark";
      }else{
        if(themeDetector === 'light'){
          html.setAttribute('data-theme', 'dark')
        }else{
          html.setAttribute('data-theme', 'light')
        }
        localStorage.setItem('theme-dark', 'light');
        htmlRef.dataset.theme = "light";
      }
    }, [themeDetector, setThemeDetector, dark, html, htmlRef?.dataset])


    return (
    <div className={"radioinput"} id="themeToggle">
      {/* The main switch of the radio input  */}
      <abbr title="Toggle Light & Dark Theme">
        <div
            onClick={toggleTheme}
            className={`radioinput__switch ${
              dark ? 'radioinput__switch--checked' : ''
            }`}
        >
            <div className="radioinput__switch__bulb">
                <CgDarkMode/>
            </div>
        </div>
      </abbr>
    </div>
    )
}

export default ThemeToggle
