import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components/index';
import Board from './Pages/Board/Board';
import Contact from './Pages/Contact/Contact';

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
          <Route path="/login" exact component={Login} />
          <Route path="/movies/" exact component={Movies} />
          <Route path="/movies/detail/:id" exact component={MoviesDetail} />
          <Route path="/board" exact component={Board} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
