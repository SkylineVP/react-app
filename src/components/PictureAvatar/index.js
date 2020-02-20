import React,{Component} from "react";

function PictureAvatar(props) {

    const {pictureImgUrl,firstName,lastName}=props.user;

    return <img src={pictureImgUrl ? pictureImgUrl : "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} alt={firstName + ' ' + lastName}/>

}
export default PictureAvatar