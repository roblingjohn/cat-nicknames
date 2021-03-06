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

  componentDidMount() {
    if (this.props.location.state.catData.sex === "male") {
      let tempArray = this.nounArray.concat(this.maleNounArray);
      this.nounArray = tempArray;
    } else if (this.props.location.state.catData.sex === "female") {
      let tempArray = this.nounArray.concat(this.femaleNounArray);
      this.nounArray = tempArray;
    }
    if (this.props.location.state.catData.size === "large") {
      let tempArray = this.nounArray.concat(this.largeNounArray);
      this.nounArray = tempArray;
      tempArray = this.adjArray.concat(this.largeAdjArray);
      this.adjArray = tempArray;
    } else if (this.props.location.state.catData.size === "small") {
      let tempArray = this.adjArray.concat(this.smallAdjArray);
      this.adjArray = tempArray;
    }
    this.selectName();
    console.log(this.props.location.state.catData);
  }

  adjArray = [
    "BABY",
    "STINKY",
    "CUTIE",
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
    "LOAF",
  ];

  maleNounArray = ["BOY", "MAN", "GENTLEMAN"];

  femaleNounArray = ["GIRL", "LADY"];

  largeAdjArray = ["CHONKY", "BIG", "TUBBY"];
  largeNounArray = ["CHONK", "TUB"];

  smallAdjArray = ["TINY", "LITTLE", "ITTY", "TEENY"];

  selectName = () => {
    let adjNumber = Math.floor(Math.random() * this.adjArray.length);
    let nounNumber = Math.floor(Math.random() * this.nounArray.length);
    this.adjWord = this.adjArray[adjNumber];
    this.nounWord = this.nounArray[nounNumber];
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
