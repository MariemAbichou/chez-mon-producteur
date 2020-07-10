import React, { Component } from "react"

class Footer extends Component {
    constructor(props) {
        super(props)
        console.log("Constructeur appelé")
        this.state = {
        }
    }
    render() {
        console.log("render appelé")
        return (
            <>
                <p>@2020 - Site de Patate développé en React</p>
            </>
        )
    }
}

export default Footer