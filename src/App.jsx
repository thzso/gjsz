import { useEffect, useState } from "react";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";



import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowWidth);

  return (
    <div className="App">{windowWidth > 767 ? <Layout1 {...{windowWidth}}/> : <Layout2 {...{windowWidth}}/>}</div>
  );
}

export default App;
