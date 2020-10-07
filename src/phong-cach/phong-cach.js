import React, { Component } from "react";
import "./phong-cach.css";
import Picture99 from "../picture/picture-9.jpg";
class Phongcach extends Component {
  render() {
    return (
      <div className="phongcach">
        <p className="p-phongcach">PHONG CÁCH</p>
        <p className="p-content">
          Tổng hợp bài viết của chuyên gia về kiến trúc, nội thất, đời sống dự
          đoán về xu hướng nội thất trong tương lai
        </p>
        <div className="group-picture">
          <div className="picture999">
            <img className="picture99" src={Picture99} />
          </div>

          <img className="picture991" src={Picture99} />
          <img className="picture992" src={Picture99} />
          <img className="picture993" src={Picture99} />
          <img className="picture994" src={Picture99} />
          <img className="picture995" src={Picture99} />
          <img className="picture996" src={Picture99} />
        </div>
        <button className="button-xem-tat-ca">Xem tất cả</button>
      </div>
    );
  }
}

export default Phongcach;
