import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Navbar />
<Contact/>
      {/* <ProductList /> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
