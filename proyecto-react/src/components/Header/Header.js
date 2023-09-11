import React from "react";
import PeliculasTrending from "../PeliculasTrending/PeliculasTrending";
import {Link} from "react-router-dom"

function Header (){
    return (
        <React.Fragment>

            <section>
               
                <img class="logo" src="./progra3-react/proyecto-react/public/Img/Albert.jpg"/>
                <br/>
                <br/>
               
                <article class="formulario">
                    <form action="./search-results.html" method="get">
                        <input class="cuadro_buscar" type="text" name="Buscador" value="" placeholder=" Iniciar busqueda"/>
                        <button class="buscarbotton" type="submit"> Buscar</button>
                    </form> 
                </article>
                <br/>
                <br/>
               
                <article class="genero-titulo-div">
                    <Link to="/">Home</Link>
                    <br/>
                    <Link to="/Favoritos">Favoritos</Link>
                    <br/> 
                    <Link to="/PeliculasTrending">Trending</Link>
                    <br/> 
                    <Link to="/Cartelera">Cartelera Hoy</Link>
                </article>
            </section>     

        </React.Fragment>    
    );
}

export default Header; 