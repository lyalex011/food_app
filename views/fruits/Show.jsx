import React from 'react'

function Show({fruit, index}) {
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {fruit.name}</p>
            <p>Color: {fruit.color}</p>
            <p>{fruit.readyToEat ? 'This fruit is ready to eat' : 'This fruit is NOT ready to eat'}</p>

            <a href="/fruits/"><button>Back</button></a>
            <a href={`/fruits/${index}/edit`}><button>Edit</button></a>
            
            <form action={`/fruits/${index}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
        </div>
    )
}

export default Show