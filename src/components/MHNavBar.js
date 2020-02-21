import React from 'react';
import PropTypes from 'prop-types';
class MHNavBar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {className} = this.props;
        return (
            <div className={className ? className : ""}>

            </div>
        );
    }
}

MHNavBar.propTypes = {
    className: PropTypes.string
};
export default MHNavBar