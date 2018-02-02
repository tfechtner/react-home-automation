import React, {Component} from 'react';
import './App.css';
import Page from "./components/Layout/Page/Page";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

class App extends Component {
    render() {
        return (
            <Page/>
        );
    }
}

export default App;
