import React from "react";
import Navbar from "../components/article/navbarComponent/Navbar";
import Articles from "../components/article/articleHomeComponent";
import Sidebar from "../components/article/sidebar";

const HomeView = ({ location }) => (
  <React.Fragment>
    <Navbar />
    <section className="blog-section">
      <div className="container">
        <div className="row">
          <Articles />
          <Sidebar />
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default HomeView;
