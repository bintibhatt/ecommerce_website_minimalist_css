import React from "react";
import { useTheme } from "../../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function LightSwitch() {
  const { theme, toggleTheme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };
  return (
    <div className="LightSwitch">
      <button onClick={handleClick}>
        {theme ? <DarkModeIcon /> : <LightModeIcon />}{" "}
      </button>
    </div>
  );
}

export default LightSwitch;
