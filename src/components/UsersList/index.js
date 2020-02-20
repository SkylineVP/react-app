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
            limit: 40,
            users: []
        }
    }

    loadData = () => {
        const {limit, users: {length},} = this.state;

        this.setState(
            {isFetching: true});
        setTimeout(() => {
            fetch(`http://localhost:3000/admin/users?limit=${limit}&offset=${length}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        isFetching: false,
                        users: [...this.state.users, ...data]
                    });
                })
                .catch((e) => {
                    this.setState({
                        error: e
                    })
                });
        }, 0);
    };

    componentDidMount() {
        this.loadData()
    }

    render() {
        const {users, isFetching, error} = this.state;
        const userCard = users.map((item, index) =>
            <UserCard user={item} key={item.id}/>
        );

        return (
            <>
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
                <button onClick={this.loadData}>Load More</button>
            </>
        )
    }

}

export default UserList