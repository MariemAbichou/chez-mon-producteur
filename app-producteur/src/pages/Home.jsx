import React, { Component } from "react"

class Home extends Component {
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
                <p>Page Home</p>
                <h1>Bienvenue chez-mon-producteur.com ! </h1>
                <p>Trouver des produits locaux à coté de chez vous</p>
                <ul>
                    <li>Produit garanti 100% frais</li>
                    <li>Promouvoir l'agriculture locale</li>
                    <li>Politique anti-gaspillage</li>
                </ul>
            </>
        )
    }
}

export default Home