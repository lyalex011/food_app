import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {props.vegetable.name}</p>
            <p>Color: {props.vegetable.color}</p>
            <p>{props.vegetable.readyToEat ? 'This vegetable is ready to eat' : 'This vegetable is NOT ready to eat'}</p>
        </div>
    )
}

export default Show