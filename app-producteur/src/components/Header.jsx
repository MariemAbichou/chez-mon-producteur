import React, { Component } from "react"

class Header extends Component {
    constructor(props) {
        super(props)
        console.log("Constructeur appelé")
        this.state = {
        }
    }
    render() {
        console.log("render appelé")
        return (
            <div>
                <img class="banniere"  src="https://www.norma.fr/sites/prod/files/styles/arrivage_grand/public/arrivage/FL%20G_24.jpg?itok=pb-9pl0I"/>
       
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                    <h1 className="navbar-brand">Menu</h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">  ACCUEIL   .</li> <br/>
                            
                            <li className="nav-item">  LES PRODUCTEURS   .</li>
                            
                            <li className="nav-item"> LES PRODUITS   .</li>
                            <li className="nav-item">  NOUS CONTACTER    .</li>
                        </ul>
                    </div>
                </nav> 
		    </div>
        )
    }
}

export default Header