import React, { Component } from 'react';

class Home extends Component {

  // constructor() {
  //   this.playerClicked = this.playerClicked.bind(this);
  // }
  state = {
  }

  componentDidMount() {

  }
  
  playerClicked(ev) {
    ev.preventDefault()
    this.props.history.push(`/musicPlayer`)
  }
  roomsClicked(ev) {
    ev.preventDefault()
    this.props.history.push(`/musicRooms`)
  }

  render() {
    return (
      <section className="home">

        <div className="head-container">

        </div>

        <div className="main-container flex wrap space-even">
          {/* <div className="wrap-img" onClick={(ev) => this.playerClicked(ev)}> */}
          <div className="wrap-img" onClick={this.playerClicked.bind(this)}>
            <img src="assets/img/icons-svg/music-player.svg" alt="Music Player" />
            <div className="text">Music Player</div>
          </div>
          <div className="wrap-img" onClick={this.roomsClicked.bind(this)}>
            <img src="assets/img/icons-svg/cinema.svg" alt="Music Rooms" />
            <div className="text">Youtube Rooms</div>
          </div>
        </div>

      </section>
    )
  }
}

export default Home;