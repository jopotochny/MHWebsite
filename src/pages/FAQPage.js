import React from 'react';
import '../styles/FAQPage.css';
import MHCard from '../components/MHCard';
export default class FAQPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Example Title",
            body: "Body text here."
        };
    }
    render(){
        return (
            <div className="faqDiv">
                <MHCard className="articleCard">
                    <div className="articleTitleDiv">
                        <h2 className="title">
                            {this.state.title}
                        </h2>
                    </div>
                    <div className="articleBodyDiv">
                        <p className="body">
                            {this.state.body}
                        </p>
                    </div>


                </MHCard>
            </div>
        );
    }
}