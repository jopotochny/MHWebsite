import React from 'react';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";
import {makeStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";

MHDropdown.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
    val: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleChange: PropTypes.func.isRequired,
};
function MHDropdown(props){
    const {className, label, items, val, handleChange} = props;
    return(
    <FormControl className={className ? className : ''}>
        <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={val}
            onChange={handleChange}
            displayEmpty

        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {Object.keys(items).map(key => <MenuItem value={items[key]}>{key}</MenuItem>)}
        </Select>
        <FormHelperText>{label}</FormHelperText>
    </FormControl>)
}
export default MHDropdown;