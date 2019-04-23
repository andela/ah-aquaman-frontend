import React from "react";
import Tags from "../../../views/tags";

const Sidebar = () => (
  <React.Fragment>
    <div className="col-lg-4">
      <div className="sidebar">
        <aside className="favourite">
          <h3 className="title">Most Favourited</h3>
          <p>No recent articles</p>
        </aside>
        <div className="separator" />
        <aside className="tags">
          <h3 className="title">Tags</h3>
          <Tags />
        </aside>
        <div className="separator" />
        <aside className="favourite">
          <h3 className="title">Most Bookmarked</h3>
          <p>No recent articles</p>
        </aside>
      </div>
    </div>
  </React.Fragment>
);
export default Sidebar;
