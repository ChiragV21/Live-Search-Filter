import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Search from './Search';
const App=()=>{
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Search}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </>
    );
}

export default App;