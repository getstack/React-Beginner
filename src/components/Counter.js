import React, { Component } from 'react';
import  logo  from '../assets/logo.png'

class Counter extends Component {
     
    constructor(props) {
        super(props)

        this.state = {

            count: 0,
            
          

        }
    }

    increment() {
        this.setState({

            count: this.state.count + 1

        },
            () => {

                console.log('Callback value', this.state.count);
            }
        )
        console.log(this.state.count);
    }


    render() {
        return (

            <div>
                Counter {this.state.count} <br></br>
                <button onClick={() => this.increment()}>increment</button>
            </div>

        );
    }
}

export default Counter;
