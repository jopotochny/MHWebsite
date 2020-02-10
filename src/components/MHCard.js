
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
});
MHCard.propTypes = {
    style: PropTypes.object,
};
export default function MHCard(props){
    const classes = useStyles();
    return(
        <Card className={classes.card}style={props.style ? props.style : {}}>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
}