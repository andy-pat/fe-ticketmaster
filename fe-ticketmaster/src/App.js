import React, { Component } from 'react'
import './App.css';
import List from './List';
// import Search from './Search';
import * as api from './api'
import { formatEventData } from './utils'

class App extends Component {

  state = {
    events: [

      {
        name: 'Magic Of Lights: Drive-Through Holiday Lights Experience',
        genre: 'Fairs & Festivals',
        dates: { start: '2020-11-13', end: '2021-01-02' },
        URL: 'https://concerts.livenation.com/magic-of-lights-drivethrough-holiday-lights-wantagh-new-york-11-13-2020/event/1D00594105A70D39',
        picture: 'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_3_2.jpg',
        venue: { name: 'Northwell Health at Jones Beach Theater', gps: [Object] },
        promoter: 'LIVE NATION MUSIC'
      }

    ],
    isLoading: false
  }

  componentDidMount() {
    console.log('mounted!')
    api.fetchEvents().then(events => {
      const data = formatEventData(events)
      this.setState({events: data, isLoading: false})
    })
  }

  render() {
    if (this.state.isLoading === true) {
      return <p>Finding Cool Events Near You...</p>
    } else
      return (
        <div className="App">
          <h1>TicketMaster API</h1>
          {/* <Search /> */}
          <List contents={this.state.events} />
        </div>
      );
  }
}


export default App;
