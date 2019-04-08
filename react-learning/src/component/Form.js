import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      skill: "React"
    };
  }

  handleUsernameChane = event => {
    this.setState({ username: event.target.value });
  };

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    });
  };

  handleSkillChange = event => {
    this.setState({
      skill: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.skill}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChane}
          />
        </div>
        <div>
          <label>Comments: </label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <label>Skill: </label>
          <select value={this.state.skill} onChange={this.handleSkillChange}>
            <option value="React">React</option>
            <option value="MS">MS</option>
            <option value="GCP">GCP</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
export default Form;
