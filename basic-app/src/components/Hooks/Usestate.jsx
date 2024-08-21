import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
function HookPage() {

    const [name, setName] = useState("")
    const [isTrue, setIsTrue] = useState(false)
    const [count, setCount] = useState(0)


    const handleInputChange = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(name === ''){

        }else{
          setIsTrue(true)  
        }
        
    }
    const handleCancel = () => {
        setName("")
        setIsTrue(false)
    }

    const incremenet = () => {
        setCount(count+1)
    }

    const decremenet = () => {
        setCount(count-1)
    }

  return (
    <Container>
        <div style={{textAlign: 'center'}}>
        <label htmlFor="">Enter Name: </label>
        <br />
        <input type="text" value={name} onChange={handleInputChange}/>
        <button type='submit'
            className='btn btn-success' onClick={handleSubmit}>Submit</button>
        <button type="submit" 
            className='btn btn-danger' 
            onClick={handleCancel}>Clear</button>
        {isTrue && <p>Your name is {name}</p>}
        
            <h1>{count}</h1>
            <button type="button" onClick={incremenet}>+</button>
            <button type="button" onClick={decremenet}>-</button>
        </div>
        <hr />
    </Container>
  )
}

export default HookPage