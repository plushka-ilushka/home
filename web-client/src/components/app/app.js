import React, { Component } from "react";

import './app.scss';

export default class App extends Component {

    buttonClick() {
        console.log('test click');
    }

    render() {
        return (
            <div className="app">
                <h1>Hello world!</h1>
                <button type='button' onClick={ this.buttonClick }>Test input click</button>
            </div>
        );
    }
}