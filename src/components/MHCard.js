
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

MHCard.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
};
export default function MHCard(props){
    return(
        <Card className={props.className ? props.className : ''} style={props.style ? props.style : {}}>
            <CardContent style={{height: '100%'}}>
                {props.children}
            </CardContent>
        </Card>
    );
}