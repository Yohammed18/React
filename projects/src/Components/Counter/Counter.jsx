import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }


    return (
        <div className="container">
            <h2 className="text-center">Counter App</h2>
            
            <section className="btns-container text-center mt-2">
                <h1>{count}</h1>
                <button className="btn btn-info me-1 " onClick={decrement}>-</button>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </section>

            <hr />
        </div>
    )
}

export default Counter
