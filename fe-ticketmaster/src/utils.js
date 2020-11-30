import fetchEvents from './api'
import * as api from './api'


export const formatEventData = (arr) => {
    arr.map(event => {
        let newEvent = {}
        newEvent.name = arr.name
        return newEvent
    })
    return arr
}

