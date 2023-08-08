import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {props.meat.name}</p>
            <p>State: {props.meat.state}</p>
            <p>{props.meat.readyToEat ? 'This meat is ready to eat' : 'This meat is NOT ready to eat'}</p>
        </div>
    )
}

export default Show