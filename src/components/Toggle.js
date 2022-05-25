import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import './toggle.css'
import {useDarkMode} from "../useDarkMode";
import Parallax from "parallax-js";
export const Toggle = ({ theme, toggleTheme }) => {
    useEffect(()=>{
        const chk = document.getElementById('chk');
        if (chk) {
            chk.addEventListener('change', () => {
                toggleTheme();
            });}
        },[toggleTheme])
    return (
        <div className='toggler'>
            <input type='checkbox' id='chk' className='checkbox'/>
            <label htmlFor='chk' className='label'>
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faMoon}/>
                <div className='ball'></div>
            </label>
        </div>
    )
}
export default Toggle;