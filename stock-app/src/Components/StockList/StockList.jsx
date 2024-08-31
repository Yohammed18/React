import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import finnhub from '../../apis/finhub'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { WatchlistContext } from '../../Context/WatchlistContext';

function StockList() {
    
    const [stocks, setStocks] = useState([])
    const {watchList, deleteStock} = useContext(WatchlistContext)
    const navigate = useNavigate()

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

            } catch (error) {
             console.error('ERROR: ',error)   
            }
        }

        fetchData()

        return () => (isMounted = false)
    }, [watchList])


    const changeColor = (change) =>{
        return change > 0 ? 'success' : 'danger'
    }

    const renderIcon = (change) =>{
        return change < 0 ? <BsFillCaretDownFill /> : <BsFillCaretUpFill/>
    }

    const handleStockSelect = (symbol) =>{
        navigate(`detail/${symbol}`)
    }

    return (
        <div className=''>
            <h1 className='text-center' 
            style={{fontFamily: 'Georgia', fontSize: '50px'}}
            >Watch List</h1>
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
                            <tr className='table-row' key={stock.symbol}
                            onClick={() => handleStockSelect(stock.symbol)}
                            style={{cursor: 'pointer'}}
                            >
                                <th>{stock.symbol}</th>
                                <td className={`text-${changeColor(stock.data.c)}`}>{stock.data.c}{renderIcon(stock.data.c)}</td>
                                <td className={`text-${changeColor(stock.data.d)}`}>{stock.data.d}{renderIcon(stock.data.d)}</td>
                                <td>{stock.data.dp}</td>
                                <td>{stock.data.h}</td>
                                <td>{stock.data.l}</td>
                                <td>{stock.data.o}</td>
                                <td><span style={{ marginRight: '15px' }}>{stock.data.pc}</span>
                                <button className="btn btn-danger btn-sm ml-3 d-inline-block delete-button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    deleteStock(stock.symbol)
                                }}

                                >Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>            
        </div>
    )
}

export default StockList
