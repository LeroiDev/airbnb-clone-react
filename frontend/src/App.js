import React from 'react';
import './app.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homepage/HomePage';
import SearchPage from './pages/searchpage/SearchPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const App = ()=> {
  return (
    <Router>
      <Header/>
    <div className="app">
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path="/search" component={SearchPage}/>
      </Switch>
    </div>
    <Footer/>

    </Router>
  );
}

export default App;
