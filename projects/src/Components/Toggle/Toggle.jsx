import React, { useState } from 'react'



function Toggle() {

  const lightColors = [
    "#FFCCCC", // Light Red
    "#FFDDC1", // Light Peach
    "#FFFFCC", // Light Yellow
    "#CCFFCC", // Light Green
    "#CCFFFF", // Light Cyan
    "#CCCCFF", // Light Blue
    "#E0CCFF", // Light Lavender
    "#FFD9E6", // Light Pink
    "#FFFFE0", // Light Ivory
    "#F0E68C"  // Light Khaki
  ];
  
  const [color, setColor] = useState('#c5eb0d')


  const toogle = () =>{
    var random = Math.floor(Math.random()*10)
    setColor(lightColors[random])
  }

  const reset = () =>{
    setColor('white')
  }

  return (
    <div className='containter'>
        <h1 className="text-center">Toggle Color App</h1>
        <div className="container text-center">
            <button className="btn btn-primary me-2" onClick={toogle}>Toogle</button>
            <button className="btn btn-success" onClick={reset}>Reset</button>

            <div style={{height: "250px", width: "300px", border: "2px solid black", background: `${color}`}} className='container mt-2' />
            

        <hr className='mt-4 mb-4'/>
        </div>
    </div>
  )
}

export default Toggle
