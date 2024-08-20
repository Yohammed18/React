import React from 'react'
import './Greetings.css'

function Greetings() {
  var isvalid = true
  return (
    <div>
      <p style={{color: 'blue', fontFamily: 'monospace'}}>Greetings Component</p>
      <p>T</p>
      {isvalid ? <h1>True</h1> : <h1>False</h1>}
      <br />
      <hr />
      <p className='p-lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta explicabo rerum, harum accusamus qui ab mollitia, soluta blanditiis nulla in eius delectus laboriosam sunt animi possimus, error illo suscipit?</p>
    </div>
  )
}

export default Greetings