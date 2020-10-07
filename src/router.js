import React, { Component } from "react";
import OptionStart from "./option-start/option-start";
import "./App.css";

import SearchAndPersonal from "./Search-and-personal/search-and-personal";
import Navigation from "./navigation-bar/navigation-bar";
import SonNavigation from "./navigation-bar/son-of-navigation-bar/son-of-navigation-bar";
import BoSuuTap from "./bo-suu-tap/bo-suu-tap";
import Phongcach from "./phong-cach/phong-cach";
import Thuonghieu from "./thuong-hieu/thuong-hieu";
import Contact from "./contact/contact";
import Menufixed from "./menufixed/menufixed";
import Left from "./picture/chevron-left-solid.svg";
import Right from "./picture/chevron-right-solid.svg";
import classNames from "classnames";
class Routera extends Component {
  constructor() {
    super();
    this.state = {
      slide: 1,
    };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  next() {
    if (this.state.slide === 3) {
      this.setState({ slide: 1 });
    } else {
      this.setState({ slide: this.state.slide + 1 });
    }
  }
  back() {
    if (this.state.slide === 1) {
      this.setState({ slide: 3 });
    } else {
      this.setState({ slide: this.state.slide - 1 });
    }
  }

  render() {
    return (
      <div className="App" id="box">
        <Menufixed />

        <div className="option-start-pages">
          <OptionStart />
        </div>
        <div className="search-and-personal">
          <SearchAndPersonal />
        </div>
        <div className="navigation-bar">
          <Navigation />
        </div>
        <div className="son-of-navigation-bar">
          <div
            className={classNames("position", {
              none: this.state.slide !== 1,
              active: this.state.slide === 1,
            })}
          >
            {" "}
            <SonNavigation myPop="first" isDisplay={this.state.slide === 1} />
          </div>
          <div
            className={classNames("position", {
              none: this.state.slide !== 2,
              active: this.state.slide === 2,
            })}
          >
            {" "}
            <SonNavigation myPop="second" isDisplay={this.state.slide === 2} />
          </div>
          <div
            className={classNames("position", {
              none: this.state.slide !== 3,
              active: this.state.slide === 3,
            })}
          >
            {" "}
            <SonNavigation myPop="third" isDisplay={this.state.slide === 3} />
          </div>
        </div>
        <div className="button-picture">
          <div className="content-picture">
            <p className="p1">Nội thất bàn ăn sang trọng cổ điển</p>
            <p className="p2">HYURE ARCHITECTS</p>
          </div>
          <div className="personal__like__icon">
            <img className="left-icon" src={Left} onClick={this.back} />
            <img className="right-icon" src={Right} onClick={this.next} />
          </div>
        </div>
        <div className="bo-suu-tap" id="bo-suu-tap">
          <BoSuuTap />
        </div>
        <div id="phong-cach">
          <Phongcach />
        </div>
        <div id="thuong-hieu">
          <Thuonghieu />
        </div>
        <div className="App__contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Routera;
