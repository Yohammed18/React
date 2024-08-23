import { clear } from '@testing-library/user-event/dist/clear'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Employee from './Employee/Employee'

function Form() {

    //username & password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [confirmedEmail, setConfirmedEmail] = useState('')
    const [isLogged, setLogged] = useState(false)
    const [error, setError] = useState(false)
    const [exmployees, setEmployee] = useState([{}])


    // set the username, password and email parameters
    useEffect(() =>{
        setConfirmedEmail('')
        setConfirmedPassword('')

        //use axio to retrieve data
        axios.get("https://fakerapi.it/api/v1/persons?_locale=en_EN")
        .then(response => {
            setEmployee(response.data.data)
        })
        .catch(error => {
            console.error('Error Retrieving data: ',error)
        })

    }, [])

    const submitForm = (e) => {
        e.preventDefault(); // prevent the page from refreshing when the form is submitted
        if(confirmedEmail === email && confirmedPassword === password){
            setLogged(!isLogged)
        } else {
            setError(true)
        }
    }

    const clear = () =>{
        setError(false)
        setEmail('')
        setPassword('')
    }
    const logOut = () =>{
        setLogged(!isLogged)
        setEmail('')
        setPassword('')
        setError(false)
    }

  return (
    <div className='container mb-4 mt-4'>
        {!isLogged ? (
            <div className="text-center" style={{border: "2px solid black", paddingTop: "0px", paddingBottom: "20px", width: "400px"}}>
                <h1 className="text-center mb-4">Admin Login</h1>
                    <label className='me-5'>Email:</label>
                    <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/><br />
                    <label className='me-4 mt-3 mb-3'>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/><br />
                    <button className="btn btn-primary me-3" onClick={submitForm}>Log In</button>
                    <button className="btn btn-info" onClick={clear}>Clear</button>
                {/* Conditional Error Message */}
                    {error && (
                        <p style={{ color: 'red' }} className='mt-4'>
                            <strong>You did not enter the correct email or password</strong>
                        </p>
                    )}
            </div>
        ) : (
            <div >
                <Employee employeeList={exmployees}/>
                <button className="btn btn-danger float-end" onClick={logOut}>Log Out</button>
            </div>
        )}
    </div>
  )
}

export default Form
