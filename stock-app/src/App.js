import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockOverviewPage from './Pages/StockOverviewPage/StockOverviewPage';
import StockDetailPage from './Pages/StockDetailPage/StockDetailPage'
import { WatchlistContextProvider } from './Context/WatchlistContext';
import image from './img/Investoseed Logo.png'
function App() {

  return (
    <main className='container mt-3 mb-3'>
      <div className="mb-5 text-center">
        <img src={`${image}`} alt="logo" style={{width: "300px"}}/>
      </div>
      <WatchlistContextProvider>
        <BrowserRouter>
          <Routes>            
            <Route path='/' element={<StockOverviewPage />} />
            <Route path='/detail/:symbol' element={<StockDetailPage />}/>
          </Routes>
        </BrowserRouter>
      </WatchlistContextProvider>
    </main>
  );
}

export default App;
