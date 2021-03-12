import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components/index';

import Home from './Pages/HomePage/Home';

import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';

import Movies from './Pages/Movies/Movies';
import MoviesDetail from './Pages/MoviesDetail/MoviesDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/movies/" component={Movies} />
          <Route path="/movies/detail/:id" component={MoviesDetail} />
          <Route path="/main" component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
