import React, { useState } from 'react'
import { Container } from 'react-bootstrap'





function Resturant() {
    
    const [resturants, setResturants] = useState([
        { id: 1, name: 'PF Chang', capacity: 100 },
        { id: 2, name: 'Olive Garden', capacity: 120 },
        { id: 3, name: 'Red Lobster', capacity: 150 },
        { id: 4, name: 'Cheesecake Factory', capacity: 200 },
        { id: 5, name: 'Buffalo Wild Wings', capacity: 90 }
        ]
    )

    const [inputValue, setInputValue] = useState("")

    const [id, setId] = useState(1)


    const changeId = () => {
        const numericId = parseInt(inputValue, 10)
        if(!isNaN(numericId)){
            setId(numericId)
            setInputValue('')
        }
    }

    const changeResturant = () =>{
        setResturants(
            resturants.map(m => 
                m.id === id ? {...m, name:"McDonald"} : m
            )
        );
    };


    return (
        <Container>
            <h1>Resturant App</h1>
            
            {resturants.map((r) => 
                r.id === id ? (
                <ul key={r.id}>
                    <li>Resturant: {r.name}</li>
                    <li>Capacity: {r.capacity}</li>
                </ul> 
            ) : null
            )}

            Enter Id: <input type="text" size={3} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/><br />
            <button className="btn btn-primary" onClick={changeId}>Submit</button> 
            <button className='btn btn-info' onClick={changeResturant}>Change Resturant</button>
        </Container>
    )
}

export default Resturant
