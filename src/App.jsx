import Navg from "./components/Navg";
import Head from "./components/Head";
import Section from "./components/Section";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  let [cNum, setcNum] = useState(0);
  const Cnum = (val) => {
    setcNum(val);
  };
  return (
    <div>
      <Navg numm={cNum} />
      <Head />
      <Section onChange={Cnum} />
      <Footer />
    </div>
  );
};

export default App;
