import React, { Component } from "react";
import "./thuong-hieu.css";
import Picture10 from "../picture/picture-10.jpg";
class Thuonghieu extends Component {
  render() {
    return (
      <div className="thuonghieu">
        <p className="p-thuonghieu">THƯƠNG HIỆU</p>
        <p className="p-content">
          Top những đơn vị tư vấn, thiết kế & thi công chất lượng được nhiều
          khách hàng tin tưởng, quan tâm, theo dõi và ủng hộ
        </p>
        <div className="group-picture">
          {" "}
          <img className="picture10" src={Picture10} />
          <img className="picture101" src={Picture10} />
          <img className="picture102" src={Picture10} />
          <img className="picture103" src={Picture10} />
          <img className="picture104" src={Picture10} />
        </div>
        <button className="button-xem-tat-ca">Xem tất cả</button>
      </div>
    );
  }
}

export default Thuonghieu;
