import React from "react";
import NavigationBar from "./NavigationBar";
import HomeCard from "./components/HomeCard";
import SamCard from "./components/SamCard";

import "./App.css";

const App = () => {
  return (
    <section className="main-container">
      <NavigationBar logo={"Sam Munro"} />
      <HomeCard content={<SamCard />} />
    </section>
  );
};

export default App;
