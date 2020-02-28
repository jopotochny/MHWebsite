import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../styles/QuestRewardsPage.css';
class QuestRewardPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab: "LR"
        }
    }
    handleTabChange = (e, value) => {
        this.setState({currentTab: value})
    };
    render(){

        return(
            <div className="questRewardDiv">
                <div className="tabsBar">
                    <Tabs  value={this.state.currentTab} onChange={this.handleTabChange} indicatorColor="secondary">
                        <Tab label="Low Rank" value="LR"/>
                        <Tab label="High Rank" value="HR"/>
                        <Tab label="Master Rank" value="MR"/>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default QuestRewardPage;