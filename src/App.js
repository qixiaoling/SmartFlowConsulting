import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Review from "./Review";
import Contact from "./Contact";

function App() {

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contact' exact component={Contact}/>
            </Switch>
        </Router>


    )
}

export default App;
