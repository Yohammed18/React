import React, { useState, useEffect } from 'react'
import finhub from '../../apis/finhub'




function AutoComplete() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

    //show drop down
  const renderDropdown = () => {
    const dropDownClass = search ? 'show' : null

    return (
      <ul className={`dropdown-menu ${dropDownClass}`} style={{
        height: '500px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        cursor: 'pointer',
        width: '425px'
      }}>
        {results.map((result, index) =>{
          return (
            <li key={index} className='drowdown-item'>{result.description} - ({result.symbol})</li>
          )
        })}
      </ul>
    )
  }

  useEffect(() =>{

    let isMounted = true
    const fetchData = async () =>{
      try {
        const response = await finhub.get("/search", {
          params: {
            q: search
          }
        })

        if(isMounted){
           setResults(response.data.result)
        }

      } catch (error) {
        throw new Error('Unable to fetch: ',error.stack)
      }
    }
  

    if(search.length > 0){
      fetchData()
    } else {
      setResults([])
    }

    return () => (isMounted = false)

  }, [search])


  return (
    <div className='w-75 p-5 rounded mx-au text-center'>
      <div className="form-floating dropdown">
        <input style={{backgroundColor: "", }} id='search' type='text' className='form-control' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <label htmlFor="search">Search</label>
        {renderDropdown()}
      </div>
    </div>
  )
}

export default AutoComplete
