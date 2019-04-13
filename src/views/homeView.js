import React from "react";
import Navbar from "../components/article/navbarComponent/Navbar";
import ImageBanner from "../components/article/ImageBanner";
import Articles from "../components/article/articleHomeComponent";
import Sidebar from "../components/article/sidebar";

const HomeView = () => (
  <React.Fragment>
    <Navbar />
    { location.pathname !== "/" && <ImageBanner info="Home Page" page="Home" /> }
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
