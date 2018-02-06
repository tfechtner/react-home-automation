import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './Content.css';
import Home from "../../Pages/Home/Home";
import Music from "../../Pages/Music/Music";

class Content extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/music' component={Music}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Content;
