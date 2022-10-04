import React from "react";
import HomeBody from "./HomeBody";
import HomeNav from "./HomeNav";
import "../../StyleSheets/home.css";

function Home() {
  return (
    <div className="home_container">
      <HomeNav />
      <HomeBody />
    </div>
  );
}

export default Home;
