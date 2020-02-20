import React, {Component}                      from "react";
import Icon                                    from '@mdi/react'
import {mdiInstagram, mdiFacebook, mdiTwitter} from '@mdi/js'

const linkMap = new Map([
    ['www.facebook.com', mdiFacebook],
    ['www.instagram.com', mdiInstagram],
    ['twitter.com', mdiTwitter]
]);

class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const netUrl = new URL(this.props.link);
        const hostname = netUrl.hostname;
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
        return (<li>
            <a href={this.props.link}>
                <Icon path={linkMap.get(hostname)}
                      size={1}
                      color={this.props.color}
                />
            </a>
        </li>)
    }

}

export default Link;