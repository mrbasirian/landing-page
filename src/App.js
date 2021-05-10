import "./App.css";
import React from "react";

import Header from "./pages/header/header.componets";
import HeadingMain from "./components/heading-main/heading-main.component";
import HeadingSub from "./components/heading-sub/heading-sub.component";
import Features from "./components/features/features.component";
import Plan from "./components/plan/plan.component";
import Global from "./components/global/global.component";
import Customer from "./components/customer/customer.component";
import Subscribe from "./components/subscribe/subscribe.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HeadingMain />
      <HeadingSub />
      <Features />
      <Plan />
      <Global />
      <Customer />
      <Subscribe />
    </div>
  );
}

export default App;
