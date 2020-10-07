import React, { Component } from "react";
import "./option-start.css";
class OptionStart extends Component {
  render() {
    return (
      <div className="OptionStart">
        <div className="option">
          <a className="option1" href="#">
            NỘI THẤT NHANH
          </a>
          <a className="option2" href="#">
            MỘT KIẾN TRÚC
          </a>
        </div>
        <div className="language-Up">
          <div className="language">
            <a className="language__VN" href="#">
              VN
            </a>
            <a className="language__EN" href="#">
              EN
            </a>
          </div>
          <div className="up-product">Up sản phẩm</div>
        </div>
      </div>
    );
  }
}

export default OptionStart;
