import React, { useState } from 'react'
import './style.css'

function Calculator() {
    const firstRow = [7,8,9,"*"]
    const secondRow = [4,5,6, "-"]
    const thirdRow = [1,2,3,"+"]
    const fourthRow = ['.',0,'=',"/"]


    const [input, setInput] = useState(0)
    const [operator, setOperator] = useState('')
    const [numbers, setNumbers] = useState([])

    const clickButton = (value) =>{
        

        if(value === "*" || value === "-" || value === "/" || value === "+"){
            setOperator(value)
        } else if(value === "="){
            calculate()
        } 
        else {
            setNumbers((numbers) => [
                ...numbers, value
            ])
            setInput(value)
        }
    }

    const calculate = () =>{
        
        var result = numbers[0]
        switch (operator) {
            case "+":
                for(let i = 1; i < numbers.length; i++){
                    result+= numbers[i]
                }
                setInput(result)
                setNumbers([])
                break;
            case "-":
                for(let i = 1; i < numbers.length; i++){
                    result-= numbers[i]
                }
                setInput(result)
                setNumbers([])
                break;
            case "*":
                for(let i = 1; i < numbers.length; i++){
                    result*= numbers[i]
                }
                setInput(result)
                setNumbers([])
                break;
            case "/":
                for(let i = 1; i < numbers.length; i++){
                    if (numbers[i] === 0) {
                        console.error('Division by zero error');
                        result = undefined; // or handle as needed
                        break;
                    }
                    result/= numbers[i]
                }
                setInput(result)
                setNumbers([])
                break;         
            default:
                break;
        }      
    }

    const clear = () =>{
        setInput(0)
        setOperator('')
        setNumbers([])
    }

  return (
    <div className='container'>
      <h1 className="text-center">Calculator App</h1>
      <div className="container">
        <div className="mt-5 ">
            <div className="row row-cols-6" >
                <div className="col-sm-2"></div>
                <div className="col-5">
                    <span style={{display: 'inline-flex'}}>
                        <input type="text" className='form-control me-3' placeholder={input} value={input} onChange={(e) => setInput(e.target.value)}/>
                        <button className="btn btn-danger " onClick={clear} style={{fontSize: "20px"}}>Clear</button>
                    </span>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row row-cols-6" >
                <div className="col"></div>
                {firstRow ? firstRow.map((first, index) => {
                    return <div className="col cal-box" key={index} onClick={() => clickButton(first)}
                    >{first}</div>
                }) : (
                    <p>Loading....</p>
                )}
                <div className="col"></div>
            </div>
            <div className="row row-cols-6" >
                <div className="col"></div>
                {secondRow ? secondRow.map((second, index) => {
                    return <div className="col cal-box" key={index} onClick={() => clickButton(second)}>{second}</div>
                }) : (
                    <p>Loading....</p>
                )}
                <div className="col"></div>
            </div>
            <div className="row row-cols-6" >
                <div className="col"></div>
                {thirdRow ? thirdRow.map((third, index) => {
                    return <div className="col cal-box" key={index} onClick={() => clickButton(third)}>{third}</div>
                }) : (
                    <p>Loading....</p>
                )}
                <div className="col"></div>
            </div>
            <div className="row row-cols-6" >
                <div className="col"></div>
                {fourthRow ? fourthRow.map((fourth, index) => {
                    return (
                    <div className="col cal-box" key={index} onClick={() => clickButton(fourth)}>{fourth}</div>
                )
                }) : (
                    <p>Loading....</p>
                )}
                <div className="col"></div>
            </div>
        
        </div>
      </div>
      <hr className='mt-5 mb-5' />
    </div>
  )
}

export default Calculator
