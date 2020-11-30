export const fetchDetails = () => {
    return fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?apikey=az3uYIhp3xc2JKCBEN9xl3daKYWGrsx3"
    )
    .then((res) => res.json())
    .then((data) => data.items)
}