import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavbarReact from "./components/navbar";

import Tugas1 from "./pages/tugas1";
import Tugas2 from "./pages/tugas2";
import Tugas3 from "./pages/tugas3";
import RequestAPI from "./pages/requestAPI";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarReact />
        <div className="container">
          <Route path="/tugas1" component={Tugas1} />
          <Route path="/tugas2" component={Tugas2} />
          <Route path="/tugas3" component={Tugas3} />
          <Route path="/reqAPI" component={RequestAPI} />
        </div>
      </div>
    );
  }
}
export default App;
