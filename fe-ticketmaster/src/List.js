import React from 'react';
// import formatEventData from './utils'


const List = (props) => {
    console.log(props, 'props')
    const events = props.contents
    return (
        <div>
            <ul>
                {events.map((event) => {
                    return (
                        <li class='event-card'>
                        <div>
                            <h2>{event.name}</h2>
                            <h3>{event.genre}</h3>
                            <p>{event.dates.start ? `start date: ${event.dates.start}` : 'TBA'} {event.dates.end && `end date: ${event.dates.end}`}</p>
                            <a href={event.URL} target='blank'>More Info</a><br></br>
                            <a href={`https://maps.google.com/?q=${event.venue.lat},${event.venue.long}`}>
                            
                            Get Directions Here!</a><br></br>
                            <small>Presented by {event.promoter}</small>
                            </div>
                            <div>
                            <img src={event.picture} alt='Super Fun Event'></img><br></br>
</div>

                        </li>

                    )
                })}
            </ul>
        </div>
    );
};

export default List;