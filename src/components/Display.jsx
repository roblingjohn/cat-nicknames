import React, { Component } from 'react';

class Display extends Component {
    state =  {
        adj: "",
        noun: ""
    }
    
    adjWord = ""

    nounWord = ""

    componentDidMount() {
        this.selectName();
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
        "SLLEPY",
        "CUDDLE",
        "SASSY",
        "SLINKY",
        "FUZZY",
    ]

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
        "MAGICIAN",
        "CUP",
        "LOAF",
    ]

    selectName = ()=> {
        let adjNumber = Math.floor(Math.random() * this.adjArray.length);
        let nounNumber = Math.floor(Math.random() * this.nounArray.length)
        this.adjWord = this.adjArray[adjNumber];
        this.nounWord = this.nounArray[nounNumber];
        this.setState({
            adj: this.adjWord,
            noun: this.nounWord
        })
    }

    render() {
        return (
            <div>
                <h3>call your cat</h3>
                <h1>{this.state.adj}</h1>
                <h1>{this.state.noun}</h1>
                <button className="newNickname" onClick={this.selectName}>NEW NICKNAME</button>
            </div>
        );
    }
}

export default Display;