import React from 'react';
import MHRow from './MHRow';
import PropTypes from 'prop-types';
function MHTable(props){
    const {rows, className} = props;
    return(
        <div className={className ? className : ""}>
            {rows.map((row) => {
                return <MHRow className={row.className}>
                    {row.row}
                </MHRow>
            })}
        </div>
    );
}

MHTable.propTypes = {
    /** an array of objects of the form {
     * row: the JSX of whatever you want the row to be.
     * className: an optional class name to override the default styling of the row
    } **/
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** an optional class name for overriding the default styling of MHTable **/
    className: PropTypes.string
};

export default MHTable;