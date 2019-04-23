import React, { Component } from "react";
import { connect } from "react-redux";
import { getTags } from "../actions/tags/tags";
import TagComponent from "../components/article/articleComponent/tagComponent";

class Tags extends Component {
  componentDidMount() {
    this.props.getTags();
  }

  render() {
    const { isLoading, tags } = this.props.tags;
    return (
      <div>
        {tags.length === 0 || isLoading ? "No tags yet" : tags.map(tag => (<li><TagComponent tag={tag} key={tag} /></li>))}
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  tags: state.tags,
});

export default connect(mapStateToProps, { getTags })(Tags);
