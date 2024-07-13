import Navg from "./components/Navg";
import Head from "./components/Head";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  let [count, setCount] = useState();

  useEffect(() => {
    setCount(0);
  }, []);
  const get = (val) => {
    setCount(val);
  };
  return (
    <div>
      <Navg count={count} />
      <Head />
      <Section onChange={get} />
      <Footer />
    </div>
  );
};

export default App;
