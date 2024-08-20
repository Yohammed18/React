import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
function HookPage() {

    const [name, setName] = useState("")
    const [isTrue, setIsTrue] = useState(false)
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

    const handleCancel = () =>{
        setName("")
        setIsTrue(false)
    }
  return (
    <Container>
        <label htmlFor="">Enter Name: </label>
        <br />
        <input type="text" value={name} onChange={handleInputChange}/>
        <button type='submit'
            className='btn btn-success' onClick={handleSubmit}>Submit</button>
        <button type="submit" 
            className='btn btn-danger' 
            onClick={handleCancel}>Cancel</button>
        {isTrue && <p>Your name is {name}</p>}
        
    </Container>
  )
}

export default HookPage