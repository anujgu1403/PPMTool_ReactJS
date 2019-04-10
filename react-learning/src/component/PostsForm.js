import React, { Component } from "react";
import Axios from "axios";

class PostsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log("Issue with service call: ", error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          Posts from
          <br />
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.changeHandler}
          />
          <br />
          <button>Submit Post</button>
        </form>
      </div>
    );
  }
}

export default PostsForm;
