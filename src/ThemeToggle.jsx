import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Button } from "react-bootstrap";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Button className="" variant="none" onClick={toggleDarkMode}>
      {darkMode ? < CiLight className='fs-3 text-warning'/> : < MdDarkMode className='fs-3' />}
    </Button>
  
)}


export default ThemeToggle;