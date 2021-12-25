import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Home";
import Contact from "./Page/Contact";

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
