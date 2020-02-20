import React, {Component} from "react";
import styles             from "./styles.module.css"
import UserCard           from '../UserCard'
import Spiner             from "../Spiner";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isFetching: false,
            users: []
        }
    }

    componentDidMount() {
        this.setState(
            {isFetching: true});
        setTimeout(() => {
            fetch(process.env.PUBLIC_URL + 'users.json')
                .then(res => res.json())
                .then(users => {
                    this.setState({
                        isFetching: false,
                        users: users
                    })
                })
                .catch((e) => {
                    this.setState({
                        error: e
                    })
                });
        }, 5000);
    }

    render() {
        const {users, isFetching, error} = this.state;
        const userCard = users.map((item, index) =>
            <UserCard user={item} key={item.id}/>
        );
        console.log(userCard);
        return (
            <div className={styles.container}>
                <div className={styles.wraper}>
                    {
                        userCard
                    }
                    {
                        isFetching && <Spiner/>
                    }
                </div>

            </div>
        )
    }

}

export default UserList