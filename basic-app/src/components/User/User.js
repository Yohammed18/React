import React from 'react'

function User(props) {
    var userInfo = props.info
  return (
    <div>
        <h1>User Info</h1>
        {userInfo.map((item, index) => (
        <ul key={index}>
            <li><strong>ID: </strong>{index+1}</li>
            <li><strong>username: </strong>{item.username}</li>
            <li><strong>email: </strong>{item.email}</li>
            <li><strong>location: </strong>{item.location}</li>
        </ul>
        ))}
    </div>
  )
}



export default User