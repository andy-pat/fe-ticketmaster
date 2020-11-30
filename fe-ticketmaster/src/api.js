export const fetchEvents = () => {
    return fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?apikey=az3uYIhp3xc2JKCBEN9xl3daKYWGrsx3"
    )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            
            return data._embedded.events
        })
}