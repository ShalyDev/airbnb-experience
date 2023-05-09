import locIcon from '../images/locIcon.png';


export default function Journal(props) {
    return (
        <div className='journal-flex'>
            <div>
                <img src={props.imageUrl} className="journal--img" />
            </div>
            <div className='journal-content'>
                <img src={locIcon} className="location-icon" />
                <span className="journal--loc">{props.location}</span>
                <a href={props.googleMapsUrl} className="journal--link">View on Google Maps</a>
                <h1 className="journal--title">{props.title}</h1>
                <p className="journal--date">{props.startDate} - {props.endDate}</p>
                <p className="journal--txt">{props.description}</p>
            </div>
        </div>

    )
}