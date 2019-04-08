import React from "react";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";

/** function component to render a circular spinner */
const CircularProgressLoader = ({ loading }) => (
  !loading
    ? null
    : (
      <div id="loader-body" className="loader-body">
        <div className="sweet-loading" />
        <div align="center" className="lds-ripple">
          <BeatLoader
            sizeUnit="px"
            size={60}
            color="#fafafa"
            loading={loading}
          />
        </div>
      </div>
    )
);
CircularProgressLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
};


export default CircularProgressLoader;
