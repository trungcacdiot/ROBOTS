import React, { Component, component } from "react";
import "./menufixed.css";
import Up from "./chevron-up-solid.svg";

class Menufied extends Component {
  scrollBoSuuTap() {
    const element = document.getElementById("bo-suu-tap");
    element.scrollIntoView({ behavior: "smooth" });
  }
  scrollPhongCach() {
    const element = document.getElementById("phong-cach");
    element.scrollIntoView({ behavior: "smooth" });
  }
  scrollThuongHieu() {
    const element = document.getElementById("thuong-hieu");
    element.scrollIntoView({ behavior: "smooth" });
  }
  scrollTop() {
    const element = document.getElementById("box");
    element.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div className="menufixed">
        <a onClick={this.scrollBoSuuTap}>MODEL NỘI THẤT</a>
        <a onClick={this.scrollPhongCach}>PHONG CÁCH</a>
        <a onClick={this.scrollThuongHieu}>THƯƠNG HIỆU</a>
        <a onClick={this.scrollTop}>
          <img className="up-icon" src={Up}></img>
        </a>
      </div>
    );
  }
}

export default Menufied;
