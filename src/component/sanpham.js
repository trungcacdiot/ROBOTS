import React, { Component } from "react";
import "./sanpham.css";
import axios from "axios";

class Sanpham extends Component {
  constructor() {
    super();
    this.state = { robots: [] };
  }
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const robot = res.data;
        this.setState({ robots: robot });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let stt = this.props.stt;
    if (stt > 10) {
      stt = 1;
    }
    return (
      <div className="sanpham">
        <div className="sanpham__picture">{this.props.picture}</div>
        <div className="p1p2">
          <p className="p1">NEW</p>
          <p className="p2">HAND MADE</p>
        </div>
        <div className="architects">
          {this.state.robots.length > 0 ? this.state.robots[stt].username : ""}
        </div>
        <div className="sanpham__content">{this.props.content}</div>
      </div>
    );
  }
}

export default Sanpham;
