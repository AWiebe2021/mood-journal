import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Refferal from './components/Refferal';

import Home from './pages/Home';
// import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleEntry from './pages/SingleEntry';
import Profile from './pages/Profile';
import Affirmations from './pages/Affirmations';
// import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          

          <div className="container">
            <Refferal />
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/entry/:id" component={SingleEntry} />
              <Route exact path="/Affirmations" component={Affirmations} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
