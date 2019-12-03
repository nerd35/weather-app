import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {

    function matchValues () {
    if(description) {
        const weatherDescription = description.split(' ')
        const keyWords = ['cloudy','clouds', 'cloud', 'overcast']
        for(let i = 0; i < weatherDescription.length; i++) {
            if(keyWords.includes(weatherDescription[i])) {
                return <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNZOKqigAXDkPn2jJAMbcg9rkFSQ5MQKyIQmX99N2VWEBCx2q&s' alt="images"/>
            }
        }
    }}

    return (

        <div className="text-danger">
            {city && country && <h1>{city}, {country}</h1>}
            {temperature && <h1>{temperature}  °F</h1>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
        </div>
    )
}

export default Weather; 