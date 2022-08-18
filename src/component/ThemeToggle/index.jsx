import { useState, useEffect } from "react";
// import { FaSun } from "../../assets/svgs/icons"
import { CgDarkMode } from "react-icons/cg";
import "./themeToggle.style.scss";

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);
    const [htmlRef, setHtmlRef] = useState(null);
    useEffect(() => {
        const html = document.querySelector('html');
        let themeData = localStorage.getItem('theme-dark');
        if(html){
            setHtmlRef(html);
            if(themeData === "dark"){
                setDark(true);
                setDark(`(prefers-color-scheme: ${themeData})`)
            }
            html.dataset.theme = themeData
            window.matchMedia(`(prefers-color-scheme: ${themeData})`)
        }
    },[])
    useEffect(() => {
        if(!htmlRef){
            return;
        }
        if(dark){
            localStorage.setItem('theme-dark', 'dark');
            htmlRef.dataset.theme = "dark";
        }else{
            localStorage.setItem('theme-dark', 'light');
            htmlRef.dataset.theme = "light";
        }
    },[dark, htmlRef])
    return (
    <div className={"radioinput"} id="themeToggle">
      {/* The main switch of the radio input  */}
      <abbr title="Toggle Light & Dark Theme">
        <div
            onClick={() => setDark(v => !v)}
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
