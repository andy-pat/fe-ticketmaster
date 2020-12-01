import React from 'react';
// import formatEventData from './utils'

const List = (props) => {
    console.log(props, 'props')
    const events = props.contents
    return (
        <div>
            <ul class='event-card'>
                {events.map((event) => {
                    return (
                        <li>
                            <h2>{event.name}</h2>
                            <h3>{event.genre}</h3>
                            <a href={event.URL} target='blank'>More Info</a>
                            <img src={event.picture} alt='Super Fun Event'></img>
                            <a href={`https://maps.google.com/?q=${event.venue.lat},${event.venue.long}`}>Get Directions Here!</a>
                            <p>Presented by {event.promoter}</p>

                        </li>

                    )
                })}
            </ul>
        </div>
    );
};

export default List;