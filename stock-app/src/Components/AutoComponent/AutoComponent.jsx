import React, { useState, useEffect, useContext } from 'react'
import finhub from '../../apis/finhub'
import { WatchlistContext } from '../../Context/WatchlistContext';



function AutoComplete() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const {addStock} = useContext(WatchlistContext)

    //show drop down
  const renderDropdown = () => {
    const dropDownClass = search ? 'show' : null

    return (
      <ul className={`dropdown-menu ${dropDownClass}`} style={{
        height: '300px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        cursor: 'pointer',
        width: '370px'
      }}>
        {results.map((result, index) =>{
          return (
            <li key={index} className='drowdown-item'
            onClick={() => {
              addStock(result.symbol)
              setSearch('')
            }}
            onTouchStart={() => {
              addStock(result.symbol)
              setSearch('')

            }}
            >
              {result.description} - ({result.symbol})
            </li>
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
    <div className='w-75 p-5 rounded mx-au '>
      <div className="d-flex align-items-center">
        <div className="form-floating dropdown flex-grow-1 me-2">
          <input style={{backgroundColor: "", }} id='search' type='text' className='form-control' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <label htmlFor="search">Search</label>
          {renderDropdown()}
        </div>
        <button className='btn btn-lg btn-info' style={{backgroundColor: "#6AEDBB"}} onClick={() => setSearch('')}>Clear</button>
      </div>
    </div>
  )
}

export default AutoComplete
