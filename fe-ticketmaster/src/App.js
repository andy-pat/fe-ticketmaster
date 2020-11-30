import React, { Component } from 'react'
import './App.css';
import List from './List';
// import Search from './Search';
import * as api from './api'

class App extends Component {

  state = {
    events: [
      {
        name: 'Magic Of Lights: Drive-Through Holiday Lights Experience',
        date: { start: "2020-11-13",
        end: "2021-01-02" 
      },
        url: 'https://concerts.livenation.com/magic-of-lights-drivethrough-holiday-lights-wantagh-new-york-11-13-2020/event/1D00594105A70D39',
        image: "https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_LANDSCAPE_16_9.jpg",
        location: {
          longitude: -73.5023618,
          latitude: 40.6014755
        },
      },
      {
        name: 'Doug Stanhope',
        type: 'comedy',
        url: 'https://concerts.livenation.com/magic-of-lights-drivethrough-holiday-lights-wantagh-new-york-11-13-2020/event/1D00594105A70D39',
        image: "https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_LANDSCAPE_16_9.jpg",
        location: {
          longitude: -93.5023618,
          latitude: 10.6014755
        },
      }
    ],
    isLoading: true
  }

  componentDidMount() {
    console.log('mounted!')
    api.fetchEvents().then(events => {
      console.log(events, 'events')
    })
  }

  render() {
    if (this.state.isLoading === true) {
      return <p>Finding Cool Events Near You...</p>
    } else
      return (
        <div className="App">
          <header>TicketMaster API</header>
          {/* <Search /> */}
          <List contents={this.state.events} />
        </div>
      );
  }
}


export default App;
