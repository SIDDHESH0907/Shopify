import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <ProductList />
    </>
  );
}

export default App;
