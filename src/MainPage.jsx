import React from "react";
import { useTheme } from "./context/ThemeContext";
import LightSwitch from "./components/theme/LightSwitch";

function MainPage() {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme ? `Container Container-dark` : `Container Container-light`
      }
    >
      <LightSwitch />
    </div>
  );
}

export default MainPage;
