import MainPage from "./MainPage";
import "./css/main.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
