import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'


function RefComponent() {

    const inputElement = useRef(null)

    const focusInput = () => {
      console.log(inputElement)
      inputElement.current.focus();
      inputElement.current.value = 'Focus'
    }
    
  return (
    <Container>
        <h1 className="text-center" >useRef()</h1>
        <input type="text" className="form-control" placeholder='Ref text field' ref={inputElement}/>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-light" onClick={() => focusInput()}
          >Ref Focus</button>               
        </div>
        <hr />
    </Container>
  )
}

export default RefComponent
