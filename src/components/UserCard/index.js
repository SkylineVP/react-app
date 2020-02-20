import React,{Component} from "react";
import PictureAvatar from '../PictureAvatar'
import style from "./style.module.css"
class UserCard extends Component{
    constructor(props) {
        super(props);
    }
    render() {

        return <div className={style.userCard}>
            <PictureAvatar   user={this.props.user}/>
            <h2>{this.props.user.firstName+""+this.props.user.lastName}</h2>
        </div>
    }
}
export default UserCard;