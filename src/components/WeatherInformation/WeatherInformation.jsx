
const WeatherInformation = ({ conditions }) => {
    return (
        <li className="weather-item">
            <h3>{conditions.day}</h3>
            <img src={conditions.img} alt={conditions.imgAlt} />
            <p>{conditions.conditions}</p>
            <p>{conditions.time}</p>
        </li>
    );
}

export default WeatherInformation;
