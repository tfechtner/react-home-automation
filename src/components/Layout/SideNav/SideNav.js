import React, {Component} from 'react';
import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <div className="col side-nav">
                <ul className="side-nav__menu">
                    <li className="side-nav__menu--item">
                        <a className=""><i className="fa fa-2x fa-fw fa-home"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNav;
