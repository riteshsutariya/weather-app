import { useState, useEffect } from 'react'
export default function Weather() {
    const [city, setCity] = useState('');
    const [search, setSearch] = useState('Surat');
    const [disp, setDisp] = useState({});
    useEffect(() => {
        // console.log(process.env.REACT_WEATHER_API_KEY);
        const app_key=process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${app_key}`;
        const fetchApi = async () => {
            const resp = await fetch(url);
            const data = await resp.json();
            setDisp(data.main);
            console.log(disp);
        }
        fetchApi();
    }, [search])

    const handleCityChange = (e) => {
        setCity(e.target.value);
        setSearch(e.target.value);
    }
    /*useEffect(()=>{
        console.log("mounted");
    },[])*/
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="inp-field">
                        <input type="text" className="inp-city" name="" id="" placeholder="enter city" value={city} onChange={handleCityChange} />
                    </div>
                    {!disp ? <p>No Data Found!</p> :
                        ( 
                            <div className="info">
                                <h2 className='location'>
                                    <i className="fa-solid fa-street-view"></i>
                                    {search}
                                </h2>
                                <h1 className="temp">
                                    {disp.temp}°C
                                </h1>
                                <h2 className="temp-min-max">
                                    Min: {disp.temp_min}°C| Max: {disp.temp_max}°C
                                </h2>
                            </div>
                        )}

                </div>

            </div>
        </>
    )
}