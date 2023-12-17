import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
