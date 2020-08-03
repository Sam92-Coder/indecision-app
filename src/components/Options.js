import React from 'react'
import {Option} from './Option';


//Tasks options to discard all codes goes here
export const Options =(props) => {
    return (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Your Tasks</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Discard All
            </button>
            </div>

            {props.options.length === 0 && <p className="widget__message">Please add a tasks to get started!</p>}
            {
            props.options.map((option, index) => (
                <Option
                key={option}
                optionText={option}
                count={index + 1}
                handleOptionToDelete={props.handleOptionToDelete}
                />
            ))
            }
        </div>
    )
}
