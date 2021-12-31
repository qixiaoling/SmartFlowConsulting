import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Home";
import Contact from "./Page/Contact";

function App() {

    return (
        <Router>
            {/*<Navbar/>*/} {/* $$1 The downside is NavBar would not be rendered
            everytime the contact page loads. so that it will remain history.
            location/pathname remains "/" even when the pathname should be
            "/contact" */}
            <Switch>
                <Route path='/' exact component={Home}/>
                {/* $$2 Therefore*/}
                {/*we put the NavBar component inside the Home Component.*/}
                <Route path='/contact' exact component={Contact}/>
                {/* $$3 Therefore*/}
                {/*we put the NavBar component inside the Contact Component.*/}
            </Switch>
        </Router>


    )
}

export default App;
