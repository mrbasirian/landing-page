import "./App.css";
import React from "react";

import Header from "./components/header/header.componets";
import HeadingMain from "./components/heading-main/heading-main.component";
import HeadingSub from "./components/heading-sub/heading-sub.component";
import Features from "./components/features/features.component";
import Plan from "./components/plan/plan.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HeadingMain />
      <HeadingSub />
      <Features />
      <Plan />
    </div>
  );
}

export default App;
