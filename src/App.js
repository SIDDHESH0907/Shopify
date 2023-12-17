import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />

      <ProductList />
      <Footer/>
    </>
  );
}

export default App;
