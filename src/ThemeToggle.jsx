import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Button } from "react-bootstrap";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Button className="" variant="none" onClick={toggleDarkMode}>
      {darkMode ? < MdLightMode className='fs-3' style={{color:"rgb(246, 182, 6)"}}/> : < MdDarkMode className='fs-3' style={{color:"rgb(6, 14, 81)"}}/>}
    </Button>
  
)}


export default ThemeToggle;