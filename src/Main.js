import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import DamageEstPage from './pages/DamageEstPage';
export default function Main(){
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/damage" component={DamageEstPage}/>
        </Switch>
    );
}
