import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

MHCheckbox.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func.isRequired
};
export default function MHCheckbox(props){
    const {className, color, label, handleChange} = props;
    return(
        <FormControlLabel
            control={
                <Checkbox className={className ? className : ''} color={color ? color : 'primary'} onChange={handleChange}/>
            }
            label={label ? label : "Label"}
        />

    );

}