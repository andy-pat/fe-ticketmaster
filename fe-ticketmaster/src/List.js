import React from 'react';

const List = (props) => {
    const events = props.contents
    return (
        <div>
            <ul class='event-card'>
                {events.map((event) => {
                    return (
                        <li>
                            <h2>{event.name}</h2>
                            <h3>{event.type}</h3>
                            <button>Visit the Event Page</button>
                            <img src={event.image} alt={`${event.name} pic`} />
                        </li>

                    )
                })}
            </ul>
        </div>
    );
};

export default List;