import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Choose extends Component {
  state = {
    sex: "none",
    size: "none",
    isChosen: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.sex.value);
    console.log(event.target.size.value);
    this.setState({
      sex: event.target.sex.value,
      size: event.target.size.value,
      isChosen: true,
    });
  };

  render() {
    if (this.state.isChosen === true) {
      return (
        <Redirect 
          to={{
            pathname: "/display",
            state: {
              catData: {
                sex: this.state.sex,
                size: this.state.size,
              },
            },
          }}
        />
      );
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="sex">What sex is your cat?</label>
          <select id="sex" name="sex">
            <option value="none">---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <label htmlFor="size">What size is your cat?</label>
          <select id="size" name="size">
            <option value="none">---</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <br />
          <button>Gimme a nickname</button>
        </form>
      </div>
    );
  }
}

export default Choose;
