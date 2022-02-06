import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            parentName: 'Abida',
            ageParent : '23'

        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {

        alert(` ${this.state.parentName}  ${this.state.ageParent} from ${childName}`);
        



    }


    render() {
        return <div>
            <>

                <ChildComponent  greetHandler = {this.greetParent} />

            </>


        </div>;
    }
}

export default ParentComponent;
