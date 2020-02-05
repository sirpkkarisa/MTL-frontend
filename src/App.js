import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home/Home';
import Admin from './components/admin/Admin';

const App = () => (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route  path="/admin" component={Admin}/>
    </Router>
)
export default App;