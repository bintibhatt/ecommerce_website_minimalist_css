import "./css/main.css";
// import CartDrawer from "./components/products/CartDrawer";
import MainPage from "./MainPage";
import { ThemeProvider } from "./context/ThemeContext";
import { MainProvider } from "./context/MainContext";

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
