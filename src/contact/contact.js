import React, { Component } from "react";
import "./contact.css";
import Facebook from "./facebook-brands.svg";
import Google from "./google-plus-g-brands.svg";
import Picture11 from "../picture/picture-11.jpg";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-black">
          <div className="left">
            <p>Theo dõi chúng tôi tại: </p>
            <img className="facebook" src={Facebook} />
            <img className="google" src={Google} />
          </div>
          <div className="right">
            <div className="right-top">
              <p className="newsletter">Newsletter</p>
              <p>đăng ký nhận thông báo các sự kiện sắp tới</p>
            </div>
            <div className="right-bottom">
              <input placeholder="Địa chỉ Email" />
              <p>Đăng ký</p>
            </div>
          </div>
        </div>
        <div className="contact-white">
          <div className="white-left">
            <img className="picture11" src={Picture11} />
            <p>ĐT: 0966198246</p>
            <p>Email: trung1234@gmail.com</p>
          </div>

          <ul className="white-right">
            <li>LIÊN HỆ</li>
            <li>FAQS</li>
            <li>QUẢNG CÁO</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
