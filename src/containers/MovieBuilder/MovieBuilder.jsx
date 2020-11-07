import React, { Component } from "react";
import Movie from '../../components/Movie/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Layout from '../../containers/Layout/Layout';
import LoginComponet from '../../components/LoginComponent/LoginComponent';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import LogoutComponent from '../../components/LogoutComponent/LogoutComponent';
import AuthenticationRoute from '../../components/Authentication/AuthenticationRoute';
import NewUserComponent from '../../components/NewUserComponent/NewUserComponent';
import ListFavoritesComponent from '../../components/ListFavorites/ListFavorites';


class MovieBuilder extends Component {

  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Movie} />
              <Route exact path="/SignIn" component={LoginComponet} />
              <Route exact path="/register" component={NewUserComponent} />
              <AuthenticationRoute exact path="/welcome/:name" component={Movie} />
              <AuthenticationRoute exact path="/:name/favorites" component={ListFavoritesComponent} />
              <AuthenticationRoute exact path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <Footer />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default MovieBuilder;
