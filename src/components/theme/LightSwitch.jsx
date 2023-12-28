import React from "react";
import { useTheme } from "../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function LightSwitch() {
  const { theme, toggleTheme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };
  return (
    <div className="LightSwitch">
      <i className="theme_i" onClick={handleClick}>
        {theme ? <DarkModeIcon /> : <LightModeIcon />}{" "}
      </i>
    </div>
  );
}

export default LightSwitch;
