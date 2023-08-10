import React from 'react'

function Index({meats}) {
    return (
        <div>
            <h1>Index</h1>
            {meats.map((meat,i)=>
            <div key={i}>
            <a href={`/meats/${i}`}>{meat.name}</a>
            </div>
            )}
            <a href={`/vegetables/`}><button>Vegies</button></a>
            <a href={`/fruits/`}><button>Fruits</button></a>
            <a href={`/meats/new`}><button>Add new</button></a>
        </div>
    )
}

export default Index;