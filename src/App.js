import React, {Component} from 'react';
import "./index.css";
import UserList           from "./components/UsersList";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    componentDidMount() {
        console.log('Mount');

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Update")
    }

    componentWillUnmount() {
        console.log("Unmount");

    }


    render() {
        console.log("render");
        return (<div>
            <UserList/>
        </div>)
    }
}

export default App;
