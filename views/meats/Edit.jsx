import React from 'react'
import meats from '../../models/meats';

function Edit({ meat, index }) {
    let { name, state, readyToEat } = meat
    return (
        <div>
            <h1>Edit</h1>
            <form action={`/meats/${index}?_method=PUT`} method='POST'>

                <label htmlFor='name'>Name:</label><br />
                <input type='text' id='name' name='name' value={name}></input><br /><br /><br />

                <label htmlFor='color'>Color:</label><br />
                <input type='text' id='color' name='color' value={state}></input><br /><br />

                <label htmlFor='ready'>Ready To Eat:</label>
                <input type='checkbox' id='ready' name='readyToEat' checked={readyToEat}></input><br /><br /><br />

                <button>Update</button>
                <a href={`/meats/${index}`}><button>Back</button></a>
            </form>
        </div>
    )
}

export default Edit;