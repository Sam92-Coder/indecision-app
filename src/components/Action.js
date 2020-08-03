import React from 'react'

//Decide Action Task codes goes here
export  const Action =(props) => {
    return (
        <div>
            <button
                className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                Indecisiveness?
            </button>
        </div>
    );
}
