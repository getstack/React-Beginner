import React from 'react';

function FunctionClick() {

    function handlerClick() {

        console.log('Clicked the button');

    }



    return (<div>
        <button onClick={handlerClick} >Clicked</button>
    </div>

    )
}

export default FunctionClick;
