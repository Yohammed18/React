//import createContext 
import React, {createContext} from 'react'
import ComponentA from './ComponentA'
import { Container } from 'react-bootstrap'
import ComponentB from './ComponentB';

// create an instance
export const Data = createContext("James");

//Context API
function ContextComponent() {
    const username = 'James Brown'
  return (
    //wrap component into provider
    <Container>
        <Data.Provider value={username} >
            <ComponentA />
        </Data.Provider> 
        {/* {The Default value will be used when the component is outside of the provider} */}
        <ComponentB />
        <hr />
    </Container>

  )
}

export default ContextComponent
