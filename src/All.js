import React, { Component } from "react";
import Sanpham from "./component/sanpham";
import Picture9 from "./picture/picture-9.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
export class All extends Component {
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
      <div>
        <Link to="/all">
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
        </Link>
      </div>
    );
  }
}

export default All;
