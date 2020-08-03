import React from 'react'

//Task Action To discard codes goes here
export  const Option =(props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button
            className="button button--link"
            onClick={(e) => {
                props.handleOptionToDelete(props.optionText);
            }}
            >
            Discard
            </button>
        </div>
    );
}
