import React, { useEffect, useState } from 'react'
import { Container, Dropdown } from 'react-bootstrap'


function Customhook() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true); // Track loading state


    useEffect(() =>{
        fetch("http://localhost:8080/api/authors/")
        .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
        .then(data => {
            setData(data)
            setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
            console.error('Error:', error)
            setLoading(false); // Even if there's an error, stop the loading spinner
        }); 
    }, [])

    if (loading) {
        return (
          <Container>
            <h1 className="text-center">Custom Hook</h1>
            <p>Loading...</p>
          </Container>
        );
      }

    return (
        <Container>
            <h1 className="text-center">Custom Hook</h1>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdownMenu2">
                    Authors
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {data && data.map((item, index) => (
                    <React.Fragment key={item.id}>
                    <Dropdown.Item as="button">{item.name}</Dropdown.Item>
                    {index < data.length - 1 && <Dropdown.Divider />} {/* Add a divider after each item except the last one */}
                    </React.Fragment>
                ))}
                </Dropdown.Menu>
            </Dropdown>
            <hr />
        </Container>
    )
}

export default Customhook
