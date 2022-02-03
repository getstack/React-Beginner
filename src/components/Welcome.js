import { Component } from 'react'

class Welcome extends Component {
    

    constructor() {

        super()
        this.state = {
            message: 'Yes  is the state'

        }

    }


    changeMessage() {

        this.setState ({

            message: 'This is the state'

        })


    }
    render() {

        return (
            <div>
                <h1 >{this.state.message}</h1>
                <button   onClick={() => this.changeMessage()}>Subscribe</button>
            </div>

        )



    }



}


export default Welcome;