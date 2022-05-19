import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './toggle.css'
import {useDarkMode} from "../useDarkMode";
export const Toggle = ({ theme, toggleTheme }) => {
    window.onload=function() {
        const chk = document.getElementById('chk');
        if (chk) {
        chk.addEventListener('change', () => {
            toggleTheme();
        });}}
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