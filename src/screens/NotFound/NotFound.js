import React, { Component } from "react";

import "./NotFound.css";

class NotFound extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
            <div className= "ErrorFound">
                <img src="./200w.gif"></img>
            </div>
            </>
        )
    }
}

export default NotFound;
