import React, {Component} from "react";
import PictureAvatar      from '../PictureAvatar'
import style              from "./style.module.css"
import Link               from "../Link";

const links = ["https://www.facebook.com/", "https://www.instagram.com/", "https://twitter.com/"];

class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={style.userCard}>
            <PictureAvatar user={this.props.user}/>
            <div className={style.userContent}>
                <h3>{this.props.user.firstName + " " + this.props.user.lastName}</h3>
                <span>Web developer</span>
                <ul>
                    {links.map((link) =>
                        <Link link={link} color={'#8787ff'}/>
                    )}

                </ul>

            </div>

        </div>
    }
}
export default UserCard;