import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import DamageEstPage from './pages/DamageEstPage';
import FAQPage from './pages/FAQPage';
export default function Main(){
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/damage" component={DamageEstPage}/>
            <Route path="/faq" render={(props) => <FAQPage {...props}/>}/>
        </Switch>
    );
}
