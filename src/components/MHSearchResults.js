import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


class MHSearchResults extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }
    render(){
        const {className, paginationDivClassName, pages} = this.props;
        const numItems = pages.length;
        const displayedContainer = pages[this.state.index];
        return(
            <div className={className ? className : ""}>
                {displayedContainer}
                <div className={paginationDivClassName}>
                    <Pagination variant="outlined"
                                count={numItems}
                                page={this.state.index + 1}
                                hideNextButton={this.state.index === numItems - 1}
                                hidePrevButton={this.state.index === 0}
                                onChange={(event, value) => {this.setState({index: value - 1})}}/>
                </div>
            </div>
        );
    }
}

export default MHSearchResults;