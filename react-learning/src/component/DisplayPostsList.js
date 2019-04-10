import React, { Component } from "react";
import Axios from "axios";

class DisplayPostsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ""
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
        this.setState({
          errorMsg: "Issue with serivce Call"
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        Posts List
        <table>
          {posts.length
            ? posts.map(post => (
                <div key={post.id}>
                  <tr>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                </div>
              ))
            : null}
        </table>
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default DisplayPostsList;
