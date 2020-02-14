import React from 'react';
import MHCard from '../components/MHCard';
import '../styles/Home.css';
class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="homeDiv">
                <MHCard className="homeCard">
                    <div>
                        <p style={{fontSize: "14pt"}}>Hello!</p>
                    </div>
                    <div>
                        <p>
                            Welcome to my Monster Hunter Helper website. I made this to help me with some small tasks when
                            playing Monster Hunter World, but if I ever host this anywhere maybe you will get some use out of it
                            too!
                        </p>
                    </div>
                </MHCard>
            </div>


        );
    }
}

export default Home;