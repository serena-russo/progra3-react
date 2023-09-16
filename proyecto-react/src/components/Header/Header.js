import React from "react";
import {Link} from "react-router-dom"

import Buscador from "../Buscador/Buscador";


function Header (){
    return (
        <header>
            <section>
                <img className="logo" src="/img/_logo nashe.gif" alt="logo"/>
                <br/>
                <article className="genero-titulo-div">
                    <Link to="/"> Home </Link>
                    <br/>
                    <Link to="/Favs"> Favoritos </Link>
                    <br/> 
                    <Link to="/PeliculasTrending"> Pelis Trending </Link>
                    <br/> 
                    <Link to="/PeliculasNow"> Pelis Hoy </Link>
                    <Buscador/>
                </article>
            </section>    
        </header> 
        
    );
}

export default Header; 