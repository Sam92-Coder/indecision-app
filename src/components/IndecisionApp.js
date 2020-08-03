import React, { Component } from 'react'
import { Header} from './Header';
import AddOption from './AddOption';
import {Options} from './Options';
import {OptionModal} from './OptionModal';
import { Action } from './Action';



export default class IndecisionApp extends Component {
        state = {
            options: [],
            selectedOption: undefined
        };
    

        handleDeleteOptions =()=>{
            this.setState(() => ({options: [] }));
        }

        handleClearSelectedOption = () =>{
            this.setState(() => ({selectedOption: undefined}))
        }

        handleOptionToDelete = (optionToDelete) => {
            this.setState((prevState) => ({
                options: prevState.options.filter((option) => optionToDelete !== option)
            }));
        };

        handlePick = () => {
            const randomNumber = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNumber];
            this.setState(() => ({
                selectedOption: option
            }));
        }
        handleAddOption = (option) => {
            if(!option){
                return 'Kindle enter valid value to add item';
            } else if (this.state.options.indexOf(option )> -1 ){
                return 'This item has already exists';
            }
            
            this.setState((prevState) => ({
                options: prevState.options.concat(option)
            }));    
        };

        componentDidMount() {
            try{
                const json = localStorage.getItem('options');
                const options = JSON.parse(json);

                if(options) {
                    this.setState(() => ({ options }));
                }
            } catch (err) {
                // dont do anything
            }
        }

            componentDidUpdate(prevProps, prevState) {
                if(prevState.options.length !== this.state.options.length){
                    const json = JSON.stringify(this.state.options);
                    localStorage.setItem('options', json);
                }
            }

            componentWillMount(){
                console.log('componentWillUnmount');
            }
    
    render() {
        const subtitle = 'Put your life in hands of computer';
        return (
            <div>
               <Header subtitle={subtitle} />

                <div className="container">

                <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                /> 

                <div className="widget">
                <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleOptionToDelete={this.handleOptionToDelete}
                />

                <AddOption
                handleAddOption={this.handleAddOption}
                />
                </div>
                </div>

                <OptionModal
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
