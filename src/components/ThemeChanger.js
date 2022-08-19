import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";
import { FaSun, FaCloud, FaSnowflake, FaSeedling } from 'react-icons/fa';
import { StyledThemeChanger } from "../styles/ThemeChanger.styled";

import React from 'react'

const ThemeChanger = ({ themeToggler, isThemeDark}) => {
   
  return (
    <StyledThemeChanger>
    <div onClick={themeToggler}>
        { isThemeDark ? <FaSun /> : <FaCloud />}
        <p>Press Sun or Cloud to change theme</p>
    </div>

    {/* <div onClick={themeToggler}>
        { isThemeDark ? <FaSnowflake />  : <FaSeedling />}
    </div> */}

 

    </StyledThemeChanger>
  )
}

export default ThemeChanger
