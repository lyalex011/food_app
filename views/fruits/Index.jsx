import React from 'react'

function Index({fruits}) {
    return (
        <div>
            <h1>Index</h1>
            {fruits.map((fruit,i)=>
            <div key={i}>
            <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
            </div>
            )}
            <a href={`/vegetables/`}><button>Vegies</button></a>
            <a href={`/meats/`}><button>Meats</button></a>
            <a href={`/fruits/new`}><button>Add new</button></a>
        </div>
    )
}

export default Index;