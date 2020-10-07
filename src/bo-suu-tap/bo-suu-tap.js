import React, { Component } from "react";
import Sanpham from "../component/sanpham";
import "./bo-suu-tap.css";
import axios from "axios";
import Picture2 from "../picture/picture-2.jpg";
import Picture3 from "../picture/picture-3.jpg";
import Picture4 from "../picture/picture-4.jpg";
import Picture5 from "../picture/picture-5.jpg";
import Picture6 from "../picture/picture-6.jpg";
import Picture7 from "../picture/picture-7.jpg";
import Picture8 from "../picture/picture-8.jpg";
import Picture9 from "../picture/picture-3jpg.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const navigationName = [
  { name: "TẤT CẢ", link: "https://www.youtube.com/watch?v=jtBwUcU9dKw" },
  { name: "CHUNG CƯ", link: "https://www.youtube.com/watch?v=jtBwUcU9dKw" },
  { name: "NHÀ Ở", link: "https://www.youtube.com/watch?v=jtBwUcU9dKw" },
  { name: "VĂN PHÒNG", link: "https://www.youtube.com/watch?v=jtBwUcU9dKw" },
  { name: "KHÁCH SẠN", link: "https://www.youtube.com/watch?v=jtBwUcU9dKw" },
  {
    name: "NHÀ HÀNG & CAFÉ",
    link: "https://www.youtube.com/watch?v=jtBwUcU9dKw",
  },
  { name: "ĐỒ TRANG TRÍ", link: "https://www.youtube.com/watch?v=jtBwUcU9dKw" },
  { name: "TRẺ EM", link: "https://www.youtube.com/watch?v=jtBwUcU9dKw" },
  {
    name: "CÔNG TRÌNH KHÁC",
    link: "https://www.youtube.com/watch?v=jtBwUcU9dKw",
  },
];
const bosuutap = [
  { src: "https://robohash.org/1" },
  { src: "https://robohash.org/2" },
  { src: "https://robohash.org/3" },
  { src: "https://robohash.org/4" },
  { src: "https://robohash.org/5" },
  { src: "https://robohash.org/6" },
  { src: "https://robohash.org/7" },
  { src: "https://robohash.org/8" },
];
class BoSuuTap extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const robo = res.data;
        this.setState({ robots: robo });
        console.log(this.state.robots);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="bo-suu-tap">
        <p>Bộ sưu tập</p>
        <ul className="navigation-small">
          {navigationName.map((element) => (
            <li>
              <a href={element.link} target="_blank">
                {element.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="list-sanpham">
          {bosuutap.map((element, index) => {
            return (
              <Link to="/noithatnhanh/sanpham">
                <Sanpham
                  picture={<img className="list-picture" src={element.src} />}
                  content={
                    this.state.robots.length > 0
                      ? this.state.robots[index].name
                      : ""
                  }
                  stt={index}
                ></Sanpham>
              </Link>
            );
          })}
        </div>
        <Link to="/ROBOTS/all">
          <button className="button-xem-tat-ca">Xem tất cả</button>
        </Link>
      </div>
    );
  }
}

export default BoSuuTap;
