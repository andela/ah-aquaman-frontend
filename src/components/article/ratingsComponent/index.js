import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class Ratings extends Component {
  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        starRatedColor="#ff2f92"
        starEmptyColor="#373a3c"
        numberOfStars={5}
        name="rating"
      />
    );
  }
}

export default Ratings;
