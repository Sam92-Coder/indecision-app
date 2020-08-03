import React, { Component } from 'react'
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss';
import 'normalize.css/normalize.css';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <IndecisionApp/>
            </React.Fragment>
        )
    }
}
