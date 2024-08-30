import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockOverviewPage from './Pages/StockOverviewPage/StockOverviewPage';
import StockDetailPage from './Pages/StockDetailPage/StockDetailPage'

function App() {

  return (
    <main className='container'>
        <BrowserRouter>
          <Routes>
              <Route path='/home' element={<StockOverviewPage />} />
              <Route path='/detail/:symbol' element={<StockDetailPage />}/>
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
