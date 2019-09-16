import React, { Component } from "react";
// import NewPost from "./components/NewPost";
import CreatePost from "./containers/CreatePost";
import PostList from "./containers/PostList";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const stylesApp = {
  marginTop: 40
};

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={stylesApp}>
          <div className="col-md-6">
            {/* <NewPost /> */}
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}
