import React from "react";
import {Link} from "react-router-dom"
import "./Header.css";
import Buscador from "../Buscador/Buscador";


function Header (){
    return (
        <React.Fragment>
            <section>
                <img className="logo" src="/Img/Albert.jpg"/>
                <br/>
                <article className="genero-titulo-div">
                    <Link to="/"> Home </Link>
                    <br/>
                    <Link to="/Favs"> Favoritos </Link>
                    <br/> 
                    <Link to="/PeliculasTrending"> Trending </Link>
                    <br/> 
                    <Link to="/PeliculasNow"> Cartelera Hoy </Link>
                    <Buscador/>
                </article>
            </section>     
        </React.Fragment>    
    );
}

export default Header; 