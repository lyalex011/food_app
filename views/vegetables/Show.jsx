import React from 'react'

function Show({vegetable, index}) {
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {vegetable.name}</p>
            <p>Color: {vegetable.color}</p>
            <p>{vegetable.readyToEat ? 'This vegetable is ready to eat' : 'This vegetable is NOT ready to eat'}</p>

            <a href="/vegetables/"><button>Back</button></a>
            <a href={`/vegetables/${index}/Edit`}><button>Edit</button></a>
            
            <form action={`/vegetables/${index}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
        </div>
    )
}

export default Show