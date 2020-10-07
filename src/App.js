import React, { Component } from "react";
import Routera from "./router";
import Sanpham from "./component/sanpham";
import TapYoutube from "./bo-suu-tap/TapYoutube";
import Picture2 from "./picture/picture-2.jpg";
import All from "./All";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route exact path="/" children={<Routera />} />
          <Route exact path="/ROBOTS" children={<Routera />} />

          <Route
            path="/ROBOTS/sanpham"
            children={
              <Sanpham
                picture={<img className="list-picture" src={Picture2} />}
                content="Nội thất bàn ăn sang trọng cổ điển"
                stt="1"
              />
            }
          />
          <Route path="youtube" children={<TapYoutube />}></Route>
          <Route path="/ROBOTS/all" children={<All />}></Route>
        </switch>
      </Router>
    );
  }
}
export default App;
