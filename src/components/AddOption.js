import React, { Component } from 'react'

//Add Task codes goes here
export default class AddOption extends Component {

    state = {
        error: undefined
      };

      handleAddOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    
        this.setState(() => ({ error }));
    
        if (!error) {
          event.target.elements.option.value = '';
        }
      };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input" type="text" name="option" />
                <button className="button">Add Task</button>
                </form>
            </div>
        )
    }
}
