import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'

function EffectComponent({title}) {

    const [count, setCount] = useState(0)
    const [data, setData] = useState(null)
    const [select, setSelect] = useState(null)

    //Render for the first time
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

    const displayData = () => {
        data.map((d) => 
            d.id === count ?
            setSelect(d): null
        )
        console.log(select)
    }

    const clear = () => {
        setCount(0)
        setSelect(null)
    }

  return (
    <Container>
        <div style={{textAlign: 'center'}}>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button className="mt-3 me-3 btn btn-info" onClick={() => setCount(count+1)}
            >Click Me</button>
            <button className="mt-3 btn btn-secondary me-3" onClick={displayData}>Show Data</button>
            <button className="mt-3 btn btn-warning me-3" onClick={clear}>Reset</button>

            <div className="mt-3">
            <h4>User</h4>
                {select ? (
                    <ul key={select.id}>
                        <li><strong>Id: </strong>{select.id}</li>
                        <li><strong>title: </strong>{select.title}</li>
                        <li><strong>Completed: </strong>{select.completed.toString()}</li>
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div> 
        <hr />       
    </Container>
  )
}

export default EffectComponent
