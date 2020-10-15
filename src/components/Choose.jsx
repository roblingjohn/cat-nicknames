import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Choose extends Component {
  state = {
    sex: "none",
    size: "none",
    isChosen: false,
  };

  handleClick(choice, selection, event) {
    if (choice === "sex") {
      this.setState({
        sex: selection,
      });
    }
    else if (choice === "size") {
      this.setState({
        size: selection,
      });
    }
    else {
      this.setState({
        sex: "female",
      });
    }
    console.log(choice);
    console.log(selection);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isChosen: true
    });
  };

  render() {
    if (this.state.isChosen === true) {
      return (
        <Redirect
          to={{
            pathname: "/nickname",
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
          <h3>
            What sex is your cat?
          </h3>
          <button
            onClick={() => {
              this.handleClick("sex", "male");
            }}
          >
            Male
          </button>
          <button
            onClick={() => {
              this.handleClick("sex", "female");
            }}
          >
            Female
          </button>
          <br />
          <h3>
            What size is your cat?
          </h3>
          <button
            onClick={() => {
              this.handleClick("size", "small");
            }}
          >
            Small
          </button>
          <button
            onClick={() => {
              this.handleClick("size", "large");
            }}
          >
            Large
          </button>
          <br />

          <button className="btn" onClick={this.handleSubmit}>GIMME A NICKNAME</button>
      </div>
    );
  }
}

export default Choose;
