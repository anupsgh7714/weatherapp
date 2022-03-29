import React, { useState, useEffect } from 'react';
import './weather.css';

const Weather = () => {
    const [Search, setSearch] = useState('Faridabad');
    const [City, setCity] = useState([null]);

    const inputEvent = (event) => {
        setSearch(event.target.value);

    }

    const getData = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=ddcc2fffbddbb5d7ee6a438fadfa9b1a`);
        const data = await res.json();
        console.log(data);
        setCity(data.main);
    }

    useEffect(() => {
       getData();
    })

    return (
        <>
            <div className='container'>
                <h1>Live Weather App</h1>
                <div className='card'>
                    <input
                        type='search'
                        placeholder='Search City'
                        onChange={inputEvent}
                        value={Search}
                     />

                     <div>
                         {!City ? <p>No Data Found</p> : (<div>
                            <div className='city_temp'>{City.temp} &#8451;</div>
                    <div className='city_name'>
                        {Search}
                    </div>
                    <div className='temp'>
                        <span>Mintemp : {City.temp_min} &#8451;</span>|
                        <span>Maxtemp : {City.temp_max} &#8451;</span>
                    </div>
                    </div>)
                         
                         }
                     </div>
                    
                </div>
            </div>
        </>
    )
}

export default Weather;
