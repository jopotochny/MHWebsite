import React from 'react';
import PropTypes from 'prop-types';
function MHRow(props){
    const {className} = props;
    return (
        <div className={className ? className : ""}
             style={className ? {} : {
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "center",
                 width: "100%"
             }}>
            {props.children}
        </div>
    );
}
MHRow.propTypes = {
    /** optional class name for overriding the default MHRow styling **/
    className: PropTypes.string
}
export default MHRow;