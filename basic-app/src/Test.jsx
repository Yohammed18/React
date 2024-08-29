import React from 'react'
import { useEffect } from 'react'


function Test() {


    useEffect(()=>{
        console.log('API')
        fetch('http://localhost:5000/api/authors') // or 8080 if using springboot apis
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json(); // Assuming the server responds with JSON
        })
        .then(data => {
            console.log(`Data: ${data['message']}`)
        })
        .catch(err => {
            console.error('Error:', err);
        });
    
      }, [])



  return (
    <div className='container text-center'>
      <h1>
        Test Apis
      </h1>
    </div>
  )
}

export default Test
