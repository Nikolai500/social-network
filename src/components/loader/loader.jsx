import React from "react";
import { Spin } from "antd";
import "./loader.css";

const Loader = () => {
    return (
      <div className="loader">
          <Spin size="large" />
          <h4>Loading...</h4>
      </div>
    );
  }
  
export default Loader;
  