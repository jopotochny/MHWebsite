import React from 'react';
import MHCard from "./MHCard";
export default class MHArticle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <MHCard className="articleCard">
                <div className="articleTitleDiv">
                    <h2 className="title">
                        {this.props.title}
                    </h2>
                </div>
                <div className="articleBodyDiv">
                    <p className="body">
                        {this.props.body}
                    </p>
                </div>


            </MHCard>
        );
    }
}