import {createContext, useState} from 'react'


export const WatchlistContext = createContext()


export const WatchlistContextProvider = (props) =>{

    const [watchList, setWatchList] = useState([
        'GOOGL', 'MSFT', 'PLTR'
    ])


    const addStock = (stock) => {
        if(watchList.indexOf(stock) === -1){
            setWatchList([...watchList, stock])
        }        
    }

    const deleteStock = (stock) => {
        setWatchList(watchList.filter((el) => {
            return el !== stock
        }))
    }

    return <WatchlistContext.Provider value={{ watchList, addStock, deleteStock }}>
        {props.children}
    </WatchlistContext.Provider>
}
