import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

MHTextField.propTypes = {
    className: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};
export default function MHTextField(props){
    const {className, handleChange, label} = props;
    if( className){
        return (
            <TextField className={className} id="standard-basic" label={label} onChange={handleChange}/>
        );
    }
    else{
        return (
            <TextField id="standard-basic" label={label} onChange={handleChange}/>
        );
    }

}