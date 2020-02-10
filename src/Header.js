import React from 'react';
import MHBreadcrumb from './components/MHBreadcrumb';
import {weaponIcons} from './images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Header.css';
export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const links = [
            {
                icon: <FontAwesomeIcon icon='home'/>,
                href: "/",
                label: "Home"
            },
            {
                icon: <img src={weaponIcons["GS"]}></img>,
                href: "/damage",
                label: "Damage Calculator"
            }
        ];
        return ([
          <div className="titleDiv">
              <p>Header</p>
          </div>,
          <div className="breadcrumbDiv">
              <MHBreadcrumb links={links}/>
          </div>
        ]);
    }
}
