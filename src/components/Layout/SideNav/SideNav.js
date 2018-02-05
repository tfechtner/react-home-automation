import React, {Component} from 'react';
import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <div className="col SideNav">
                <ul className="SideNav__menu">
                    <li className="SideNav__menu--item">
                        <a className=""><i className="fa fa-2x fa-fw fa-home"></i></a>
                    </li>
                    <li className="SideNav__menu--item">
                        <a className=""><i className="fa fa-2x fa-fw fa-music"></i></a>
                    </li>
                    <li className="SideNav__menu--item">
                        <a className=""><i className="fa fa-2x fa-fw fa-lightbulb-o"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNav;
