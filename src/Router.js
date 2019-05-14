import React, { Component } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import Login from './pages/Login';
import MusicPlayer from './pages/MusicPlayer';

import MusicRooms from './pages/MusicRooms';
import MusicRoomDetails from './pages/MusicRoomDetails';

//CMPS
import NavBar from './cmps/NavBar';

class Router extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <section>
        {/* <BrowserRouter> */}
        <HashRouter>

          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/musicPlayer" component={MusicPlayer} />
            <Route exact path="/musicRooms" component={MusicRooms} />
            <Route exact path="/musicRooms/:id" component={MusicRoomDetails} />
          </Switch>

        </HashRouter>
        {/* </BrowserRouter> */}
      </section>
    )
  }
}

export default Router;
