import "./css/main.css";
// import CartDrawer from "./components/products/CartDrawer";
import MainPage from "./components/routes/MainPage";
import { ThemeProvider } from "./components/context/ThemeContext";
import { MainProvider } from "./components/context/MainContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <MainProvider>
          <MainPage />
        </MainProvider>
      </ThemeProvider>
      {/* <CartDrawer /> */}
    </div>
  );
}

export default App;
