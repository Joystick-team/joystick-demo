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

    // useEffect(() => {
    //     let themeData = localStorage.getItem('theme-dark');
    //     if(html){
    //         setHtmlRef(html);
    //         if(themeData === "dark"){
    //             setDark(true);
    //             setDark(`(prefers-color-scheme: ${themeData})`)
    //             if(themeDetector === 'dark'){
    //               html.setAttribute('data-theme', themeData)
    //             }else{
    //               html.setAttribute('data-theme', themeData)
    //             }
    //         }
    //         html.dataset.theme = themeData
    //         window.matchMedia(`(prefers-color-scheme: ${themeData})`)
    //     }
    // },[html, themeDetector])


    useEffect(() => {
        if(!htmlRef){
            return;
        }
        if(dark){
            localStorage.setItem('dark', 'dark');
            htmlRef.dataset.theme = "dark";
            window.matchMedia(`(prefers-color-scheme: ${themeDetector})`)
        }else{
            localStorage.setItem('dark', 'light');
            htmlRef.dataset.theme = "light";
            window.matchMedia(`(prefers-color-scheme: ${themeDetector})`)
        }
        
    },[dark, htmlRef])
    
    const toggleTheme = useCallback( async () => {
      setThemeDetector((prev) => (prev === 'dark' ? 'light' : 'dark'))
      setDark(prev => !prev)
      if(themeDetector === 'dark'){
        html.setAttribute('data-theme', 'dark')
      }else{
        html.setAttribute('data-theme', 'light')
      }
      if(!dark){
        localStorage.setItem('dark', 'dark');
        html.setAttribute('data-theme', 'dark')
      }else{
        localStorage.setItem('dark', 'light');
        html.setAttribute('data-theme', 'light')
      }
    }, [themeDetector, setThemeDetector, dark, html])


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
