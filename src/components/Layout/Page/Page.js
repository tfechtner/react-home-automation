import React, {Component} from 'react';
import './Page.css';
import SideNav from "../SideNav/SideNav";
import TopNav from '../TopNav/TopNav'

class Page extends Component {
    render() {
        return (
            <div className="Page container-fluid">
                <div className="row">
                    <SideNav/>
                    <div className="col content">
                        <TopNav/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
