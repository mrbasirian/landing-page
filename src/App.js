import "./App.css";
import React from "react";

import Header from "./components/header/header.componets";
import HeadingMain from "./components/heading-main/heading-main.component";
import HeadingSub from "./components/heading-sub/heading-sub.component";
import Features from "./components/features/features.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HeadingMain />
      <HeadingSub />
      <Features />
    </div>
  );
}

export default App;
