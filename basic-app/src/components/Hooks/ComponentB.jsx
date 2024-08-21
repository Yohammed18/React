import React, { useContext } from 'react'
import {Data} from './Usecontext'


function ComponentB() {
    const name = useContext(Data)
  return (
    // <Data.Consumer>
    //     {(username) => {
    //         return <p>Your name is <strong>{username}</strong></p>
    //     }}
    // </Data.Consumer>
    <div>
        <p>Your name is <strong>{name}</strong>.</p>
    </div>
  )
}

export default ComponentB
