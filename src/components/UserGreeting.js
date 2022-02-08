import React, { Component } from 'react';

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }



    render() {

        // Cinditional Rendering
        if (this.state.isLoggedin) {
            return <div>Welcome</div>

        } else {

            return <div>Please Login</div>
        }

        return (

            //     
            this.state.isLoggedin ?
                <div>Welcome</div> :
                <div>Please login</div>


        )
    }
}

export default UserGreeting;
