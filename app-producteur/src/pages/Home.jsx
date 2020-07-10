import React, { Component } from "react"
import logo from '../logo.svg';
import '../App.css';

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
                
                <h1>Bienvenue chez-mon-producteur.com ! </h1>
                 <img src={logo} className="App-logo" alt="logo" />
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