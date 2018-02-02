import React, {Component} from 'react';
import './Page.css';
import SideNav from "../SideNav/SideNav";

class Page extends Component {
    render() {
        return (
            <div className="Page">
                <div className="row">
                    <SideNav/>
                </div>
            </div>
        );
    }
}

export default Page;
