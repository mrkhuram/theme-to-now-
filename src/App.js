import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Home from './components/Home.js'
import Footer from './components/footer.js'
import About from './components/about'
import Services from './components/services'
import Product from './components/product'
import Contact from './components/contact-us'
// for routing....
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {




  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <Content /> */}
          <Switch>
      
            <Route exact path='/Home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/product' component={Product}></Route>
            <Route path='/contact-us' component={Contact}></Route> 
            <Route path='/' component={Home}></Route>


          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );

  }



}

export default App;

