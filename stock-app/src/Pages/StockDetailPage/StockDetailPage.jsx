import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import finhub from '../../apis/finhub'
import finhubalternate from '../../apis/finhubalternate'
import { useNavigate } from 'react-router-dom'


function StockDetailPage() {

  const [data, setData] = useState([])
  const [company, setCompany] = useState(null)
  const [companyInfo, setCompanyInfo] = useState(null)
  const {symbol} = useParams()
  const navigate = useNavigate()

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  useEffect(() =>{

    const currentDate = () => {
      const today = new Date(2024, 8, 6);
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1); // Subtract one day
  
      const formattedToday = getFormattedDate(today);
      const formattedYesterday = getFormattedDate(yesterday);
  
      return {
          today: formattedToday,
          yesterday: formattedYesterday
      };
    }

    const fetchData = async () =>{
      const { today } = currentDate()
      const sanitizedSymbol = encodeURIComponent(symbol)
      try {
          console.log('Fetching company data...');
          const companyResponse  = await finhub.get('/stock/profile2',  { params: {symbol}});
          console.log('Company data:', companyResponse.data);

          console.log('Fetching company data...');
          const newsResponse  = await finhub.get('/company-news',{
          params: { symbol, from: today, to: today }})
          console.log('News data:', newsResponse.data);

          console.log('Fetching company data...');
          const companyInfoResponse = await finhubalternate.get(`profile/${sanitizedSymbol}`)
          console.log('Company Info data:', companyInfoResponse.data);

          setData(newsResponse.data)

          if(companyInfoResponse.data && companyInfoResponse.data.length > 0){
            setCompanyInfo(companyInfoResponse.data[0])
          }

          setCompany(companyResponse.data)
  
      } catch (error) {
        console.error('Error fetch: ',error)
      }
    };

    fetchData();    

  }, [symbol])


  const returnHome = () =>{
    navigate('/')
  }


  return (
    <div className='mt-5 mb-5'>
      <button className="btn btn-info" onClick={() => returnHome()}>HOME</button>
      <h2 className="text-center" style={{fontFamily: 'Georgia'}}>Company Info & News.</h2>
      {data.length > 0 && company ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
            {company && (
                    <div className="card mb-3">
                      <img src={`${company.logo}`} alt="Company Logo" className="card-img-top" style={{width: '100%'}}/>
                      <div className="card-body">
                        <h5 className="card-title">{company.name}</h5>
                        <p><strong>Ticker: </strong>{company.ticker} 
                        <br /><strong>CEO: </strong>{companyInfo.ceo}
                        <br /><strong>Site: </strong><a href={`${company.weburl}`}>{company.weburl}</a><br />
                        <strong>Sector: </strong>{companyInfo.sector}
                        <br/>
                        <strong>Description: </strong>{companyInfo.description}
                        </p>
                        
                      </div>
                    </div>
                  )}
            </div>
            <div className="col-md-6">
                {data.map(d => {
                    return (
                      <div className="card mb-3" key={d.id}>
                        <img src={`${d.image}`} alt="img" className="card-img-top" style={{width: '100%'}}/>
                        <div className="card-body">
                          <h5 className="card-title">{d.headline}</h5>
                          <p className="card-text">{d.summary}</p>
                          <a href={`${d.url}`} className="btn btn-info">Learn More</a>
                        </div>
                      </div>
                    )
                })}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          {company && (
                    <div className="card mb-3">
                      <img src={`${company.logo}`} alt="Company Logo" className="card-img-top" style={{width: '100%'}}/>
                      <div className="card-body">
                        <h5 className="card-title">{company.name}</h5>
                        <p><strong>Ticker: </strong>{company.ticker} 
                        <br /><strong>CEO: </strong>{companyInfo.ceo}
                        <br /><strong>Site: </strong><a href={`${company.weburl}`}>{company.weburl}</a><br />
                        <strong>Sector: </strong>{companyInfo.sector}
                        <br/>
                        <strong>Description: </strong>{companyInfo.description}
                        </p>
                        
                      </div>
                    </div>
                  )}
        </div>
      )}
    </div>
  )
}

export default StockDetailPage
