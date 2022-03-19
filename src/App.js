import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import AllProducts from "./components/AllProducts/AllProducts";
import Footer from "./components/Footer/Footer";
import Menubar from "./components/Menubar/Menubar";
import SearchBox from "./components/SearchBox/SearchBox";
import logo from "./images/logo.jpg";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);
  const addToCart = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <Menubar logo={logo} count={count} />
      <SearchBox />
      <AllProducts setCount={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
