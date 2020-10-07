import React, { Component } from "react";
import "./search-and-personal.css";
import Picture11 from "../picture/picture-11.jpg";
import Heart from "./heart-regular.svg";
import User from "./user-regular.svg";
import Search from "./search-solid.svg";
class SearchAndPersonal extends Component {
  render() {
    return (
      <div className="SearchAndPersonal">
        <div className="logo">
          <img src={Picture11} />
          <p>Nội thất nhanh</p>
        </div>
        <div className="search">
          <input placeholder="Mục tìm kiếm ..."></input>
          <img className="search-icon" src={Search}></img>
        </div>
        <div className="personal">
          <div className="personal__name">
            <img src={User} className="personal__name__icon" />

            <div className="personal__name__name"> Phiu Thì Anh</div>
            <div className="personal__name__login"> Đăng xuất</div>
          </div>
          <div className="personal__like">
            <img className="personal__like__icon" src={Heart} />
            <div className="personal__like__number">01</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAndPersonal;
