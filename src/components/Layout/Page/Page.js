import React, {Component} from 'react';
import './Page.css';
import SideNav from "../SideNav/SideNav";
import TopNav from '../TopNav/TopNav'
import Content from "../Content/Content";

class Page extends Component {
    render() {
        return (
            <div className="Page container-fluid">
                <div className="row">
                    <SideNav/>
                    <div className="col content">
                        <TopNav/>
                        <Content/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
