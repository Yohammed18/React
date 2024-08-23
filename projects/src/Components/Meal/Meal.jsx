import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Meal() {
    const [items, setItems] = useState([]);
    const [itemsCount, setItemCount] = useState([]);
    const [select, setSelect] = useState(null); // Initialize as null

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => {
                setItems(response.data.categories);
                const newItems = response.data.categories.map((_, index) => index);
                setItemCount(newItems);
            })
            .catch(error => {
                console.error('There was an error! ', error);
            });
    }, []);

    const selectFood = (item) => {
        if (item !== null) {
            setSelect(item);
        }
    };

    const clear = () => {
        setSelect(null)
    }

    return (
        <div className='container mb-5'>
            <h1 className="text-center">Meal App</h1>
            <div className="mb-5 mt-5 row">
                <div className="col ">
                    <div className="dropdown mt-3">
                        <button className="btn btn-primary dropdown-toggle me-5" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Food Menu
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {itemsCount.map((item) => (
                                <React.Fragment key={item}>
                                    <li className="dropdown-item" onClick={() => selectFood(item)}>
                                        {items[item].idCategory} - {items[item].strCategory}
                                    </li>
                                    {/* Render divider for all items except the last one */}
                                    {item < itemsCount.length - 1 && <li><hr className="dropdown-divider" /></li>}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <button className="btn btn-danger" onClick={clear}>Meal Reset</button>
                </div>
                <div className="col">
                    <div className="card" style={{ width: "18rem", border: "4px solid black" }}>
                        {select !== null && items.length > 0 ? (
                            <>
                                <img src={items[select].strCategoryThumb} alt="" className='card-img-top' style={{border: "1px solid black", background: "lightgrey"}}/>
                                <div className="card-body" style={{border: "1px solid black", background: "lightblue"}}>
                                    <h5 className="card-title">{items[select].strCategory}</h5>
                                    <p className="card-text">{items[select].strCategoryDescription}</p>
                                </div>
                            </>
                        ) : (
                            
                            <p className='text-center' style={{color: 'red'}}><strong>Select a Meal...</strong></p>
                        )}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Meal;
