import React from 'react';
import MHBreadcrumb from './components/MHBreadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faCalculator, faQuestionCircle, faExclamation} from '@fortawesome/free-solid-svg-icons';
import './styles/Header.css';
export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const links = [
            {
                icon: <FontAwesomeIcon icon={faHome} style={{marginRight: "5px"}}/>,
                href: "/",
                label: "Home"
            },
            {
                icon: <FontAwesomeIcon icon={faCalculator} style={{marginRight: "5px"}}/>,
                href: "/damage",
                label: "Damage Calculator"
            },
            {
                icon: <FontAwesomeIcon icon={faQuestionCircle} style={{marginRight: "5px"}}/>,
                href: "/faq",
                label: "FAQ"
            },
            {
                icon: <FontAwesomeIcon icon={faExclamation} style={{marginRight: "5px"}}/>,
                href: "/quest-rewards",
                label: "Quest Rewards"
            }
        ];
        return ([
          <div className="titleDiv">
              <p className="titleParagraph">Monster Hunter Helper</p>
          </div>,
          <div className="breadcrumbDiv">
              <MHBreadcrumb links={links}/>
          </div>
        ]);
    }
}
