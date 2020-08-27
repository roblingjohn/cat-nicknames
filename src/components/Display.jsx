import React, { Component } from "react";
import { Link } from "react-router-dom";

class Display extends Component {
  state = {
    adj: "",
    noun: "",
    catData: this.props.location.state.catData,
  };

  adjWord = "";

  nounWord = "";

  currentNounArray = [];

  componentDidMount() {
    if (this.props.location.state.catData.sex === "male") {
      this.currentNounArray = this.nounArray.concat(this.maleNounArray);
    } else if (this.props.location.state.catData.sex === "female") {
      this.currentNounArray = this.nounArray.concat(this.femaleNounArray);
    } else this.currentNounArray = this.nounArray;
    this.selectName();
    console.log(this.props.location.state.catData);
  }

  adjArray = [
    "TINY",
    "BABY",
    "STINKY",
    "CUTIE",
    "LITTLE",
    "FLUFFY",
    "SWEET",
    "SILLY",
    "SLEEPY",
    "CUDDLE",
    "SASSY",
    "SLINKY",
    "FUZZY",
  ];

  nounArray = [
    "BEAN",
    "KITTY",
    "BABE",
    "BUTT",
    "BIT",
    "POTATO",
    "MUFFIN",
    "ANGEL",
    "PIE",
    "FLOOF",
    "BALL",
    "MARSHMALLOW",
    "CUP",
    "LOAF",
  ];

  maleNounArray = ["BOY", "MAN", "GENTLEMAN"];

  femaleNounArray = ["GIRL", "LADY"];

  selectName = () => {
    let adjNumber = Math.floor(Math.random() * this.adjArray.length);
    let nounNumber = Math.floor(Math.random() * this.currentNounArray.length);
    this.adjWord = this.adjArray[adjNumber];
    this.nounWord = this.currentNounArray[nounNumber];
    this.setState({
      adj: this.adjWord,
      noun: this.nounWord,
    });
  };

  render() {
    return (
      <div>
        <h3>call your cat</h3>
        <h1>{this.state.adj}</h1>
        <h1>{this.state.noun}</h1>
        <button className="btn" onClick={this.selectName}>
          NEW NICKNAME
        </button>
        <br />
        <Link to="/">
          <button className="btn">NEW CAT INFO</button>
        </Link>
      </div>
    );
  }
}

export default Display;
