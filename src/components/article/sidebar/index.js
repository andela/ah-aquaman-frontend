import React from "react";
import Tags from "../../../views/tags";

const Sidebar = () => (
  <React.Fragment>
    <div className="col-lg-4">
      <div className="sidebar">
        <aside className="search">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search articles" id="search-input" />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button"><i className="fa fa-search" /></button>
            </span>
          </div>
        </aside>

        <div className="separator" />

        <aside className="favourite">
          <h3 className="title">Most Favourited</h3>
          <p>No recent articles</p>
        </aside>
        <div className="separator" />
        <aside className="tags">
          <h3 className="title">Tags</h3>
          <ul className="taglist"><Tags /></ul>
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
