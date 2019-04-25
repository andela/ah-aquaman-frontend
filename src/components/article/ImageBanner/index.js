import React, { Component } from "react";
import Banner from "../../../assets/img/banner.jpg";

export default class ImageBanner extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="image-banner">
          <img src={Banner} alt="" />
          <div className="container">
            <div className="banner-content text-center">
              <h2>{this.props.info}</h2>
              <p>
                Home 
                {" "}
                <i className="fa fa-angle-right" /> 
                {" "}
                {this.props.page}
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
