export const formatEventData = (arr) => {

    let formattedData = arr.map(event => {

        let newEvent = {}
        newEvent.name = event.name;
        newEvent.genre = event.classifications[0].genre.name;
        newEvent.dates = { start: event.dates.start.localDate, end: event.dates.end.localDate }
        newEvent.URL = event.url;
        newEvent.picture = event.images[2].url;
        newEvent.venue = { name: event._embedded.venues[0].name, lat: +(event._embedded.venues[0].location.latitude), long: +(event._embedded.venues[0].location.longitude) }
        newEvent.promoter = event.promoter.name
        return newEvent
    })
    console.log(formattedData, 'formatteddata gps')
    return formattedData
}

