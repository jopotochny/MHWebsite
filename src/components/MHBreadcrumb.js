import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
class MHBreadcrumb extends React.Component {

    constructor(props){
        super(props);
    }
    render(){
        const {links} = this.props;
        return (
            <Breadcrumbs aria-label="breadcrumb">
                {links.map((link) => (
                    <Link href={link.href}>
                        {link.icon}
                        {link.label}
                    </Link>
                ))}
            </Breadcrumbs>
        );
    }
}

MHBreadcrumb.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MHBreadcrumb;