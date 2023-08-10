import React from 'react'

function Show({meat, index}) {
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {meat.name}</p>
            <p>Color: {meat.state}</p>
            <p>{meat.readyToEat ? 'This meat is ready to eat' : 'This meat is NOT ready to eat'}</p>

            <a href="/meats/"><button>Back</button></a>
            <a href={`/meats/${index}/Edit`}><button>Edit</button></a>
            
            <form action={`/meats/${index}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
        </div>
    )
}

export default Show