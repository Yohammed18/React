import React, { useEffect, useState } from 'react'
import finnhub from '../../apis/finhub'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

// import axios from 'axios'

function StockList() {
    
    const [stocks, setStocks] = useState([])
    const [watchList, setWatchList] = useState([
        'GOOGL', 'MSFT', 'PLTR'
    ])

    useEffect(()=>{
    
        let isMounted = true

        const fetchData = async () =>{
            
            try {
                const responses = await Promise.all(watchList.map((stock) =>{
                    return finnhub.get('/quote', {
                        params: {
                            symbol: stock
                        }
                    })
                }))
                
                const data = responses.map((response) =>{
                    return {
                        data: response.data,
                        symbol: response.config.params.symbol
                    }
                })

                if(isMounted){
                    setStocks(data)
                }
                
                console.log(data)
            } catch (error) {
             console.error('ERROR: ',error)   
            }
        }

        fetchData()

        return () => (isMounted = false)
    }, [])


    const changeColor = (change) =>{
        return change > 0 ? 'success' : 'danger'
    }

    const renderIcon = (change) =>{
        return change < 0 ? <BsFillCaretDownFill /> : <BsFillCaretUpFill/>
    }

    return (
        <div>
        <h1>Stock List</h1>
        <table className='table hover mt-5'>
            <thead style={{color: "rgb(79,89,10)"}}>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Chg</th>
                    <th scope='col'>Chg%</th>
                    <th scope='col'>High</th>
                    <th scope='col'>Low</th>
                    <th scope='col'>Open</th>
                    <th scope='col'>Pclose</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock) => {
                    return (
                        <tr className='table-row' key={stock.symbol}>
                            <th>{stock.symbol}</th>
                            <td className={`text-${changeColor(stock.data.c)}`}>{stock.data.c}{renderIcon(stock.data.c)}</td>
                            <td className={`text-${changeColor(stock.data.d)}`}>{stock.data.d}{renderIcon(stock.data.d)}</td>
                            <td>{stock.data.dp}</td>
                            <td>{stock.data.h}</td>
                            <td>{stock.data.l}</td>
                            <td>{stock.data.o}</td>
                            <td>{stock.data.pc}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        </div>
    )
}

export default StockList
