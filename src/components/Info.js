import React from 'react'

const Info = ({ speed, feels, humidity, pressure}) => {
    return (
        <div className="info-box">
            <span className="info-item">
                <span className="info-tag">Wind-Speed: </span>
                <span className="info-data">{Math.round(speed)}mph</span>
            </span>
            <span className="info-item">
                <span className="info-tag">Feels Like: </span>
                <span className="info-data">{Math.round(feels)}°C</span>
            </span>
            <span className="info-item">
                <span className="info-tag">Humidity: </span>
                <span className="info-data">{humidity}%</span>
            </span>
            <span className="info-item">
                <span className="info-tag">Pressure: </span>
                <span className="info-data">{pressure}mb</span>
            </span>
        </div>
    )
}

export default Info;