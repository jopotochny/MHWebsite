import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import DamageEstPage from './pages/DamageEstPage';
import FAQPage from './pages/FAQPage';
import QuestRewardPage from './pages/QuestRewardPage';
export default function Main(){
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/damage" component={DamageEstPage}/>
            <Route path="/faq" component={FAQPage}/>
            <Route path="/quest-rewards" component={QuestRewardPage}/>
        </Switch>
    );
}
