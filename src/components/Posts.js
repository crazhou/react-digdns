import React from "react";
import PropTypes from "prop-types";

class Posts extends React.Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => <li key={i}>{post.title}</li>)}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
