import React from "react";

function Header (){
    return (
        <React.Fragment>

            <section>
               
                <img class="logo" src="./Albert-C:\Users\deds_\OneDrive\Documentos\Prog 3\Proyecto Integrador\progra3-react\proyecto-react\public\Img\Albert fachero.jpg.jpg" alt="Logo" srcset=""/>
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
                    <a class="titulo-href" href="./genres.html">GENEROS</a>
                    <br/>
                    <a class="titulo-href" href="./favoritos.html">FAVORITOS</a>
                </article>
            </section>     
        </React.Fragment>    
    );
}

export default Header; 