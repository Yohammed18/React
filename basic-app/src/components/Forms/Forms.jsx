import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

function Forms() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const login = (e) =>{
        e.preventDefault() // Prevents the form from submitting
        if(username ==='username' && password === 'password'){
            setIsLogged(true)
        }else{
            setIsLogged(false)
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

  return (
    <Container>
        <div style={{textAlign: 'center'}}>
            <h1>FORM APPLICATION</h1>
            <form onSubmit={login}>
                <label htmlFor="" className='me-3' >Username: </label>
                <input type="text" value={username} placeholder='Enter username' onChange={handleUsername}
                /><br />
                <label htmlFor="" className='me-3'>Password: </label>
                <input type="password" value={password}  placeholder='Enter username' onChange={handlePassword}
                /><br />
                <button type="submit" className='btn btn-primary mt-2'>LOGIN IN</button>
            </form>
            <div className='mt-4'>
                {isLogged === true ? <h1 style={{color: 'green'}}>You logged in</h1> : <h2 style={{color: 'red'}}>You are logged out</h2>} 
            </div>


        </div>
    </Container>
  )
}

export default Forms
