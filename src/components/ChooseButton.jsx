import React from 'react';

const ChooseButton = (props) => {
    return (
        <button className="selectBtn" onClick={props.onClick}>
            {props.selection}
        </button>
    );
};

export default ChooseButton;