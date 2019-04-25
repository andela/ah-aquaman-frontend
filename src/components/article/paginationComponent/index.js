import React, { Component } from "react";
import Pagination from "react-js-pagination";

export default class PaginationComponent extends Component {
  state = {
    activePage: 1,
  };

  render() {
    return (
      <div className="col-sm-12 article-pagination-component">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={6}
          totalItemsCount={100}
        />
      </div>
    );
  }
}
