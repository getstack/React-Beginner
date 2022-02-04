import React, { Component } from 'react';

export class ClassClick extends Component {

    constructor(props) {
        super(props)

        this.state = {

            message: "Hello"

        }

       


    }


    clickedHandler() {

        this.setState({

            message: "Good bye"
           

        })
}

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickedHandler.bind(this)}>Class Clicked</button>
            </div>
        );
    }
}

export default ClassClick;
