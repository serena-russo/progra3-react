import React, {Component} from "react";
import {Link} from "react-router-dom";


class Card extends Component {
    constructor(props){ 
        super(props);
        this.state={
            textoBoton: "Agregar a favoritos",
            text:props.datosPeliculas.overview,
            show: false,
        }
    }

    componentDidMount(){
    //Chequear si el id está en el array de favoritos
    let recuperoStoragePelis= localStorage.getItem("favoritos");
    if (recuperoStoragePelis !== null){ //lo q trajimos de local storage, ahora lo tenemos en un formato procesable por JavaScr
        let favoritos = JSON.parse(recuperoStoragePelis);

        //si esta el id, necesito cambiar el texto del boton
        if (favoritos.includes(this.props.datosPeliculas.id)){
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }
    }
    }
    
    agregar_sacar(id) {
        let favoritos = [] //1) array vacio
        let recuperoStoragePelis = localStorage.getItem("favoritos");
    

        if (recuperoStoragePelis !== null){
            favoritos = JSON.parse(recuperoStoragePelis);
        }

        if (favoritos.includes(id)){
            favoritos = favoritos.filter (unId => unId !== id) //pq filter para sacar un elemento del array? 
        //con que elementos me voy a quedar en este nuevo array? todos los id menos uno -->
        
        //Mostrarle un cambio al usuario en pantalla
        this.setState({
            textoBoton: "Agregar a favoritos"
        })  
    
        } else {
            //si el id NO ESTA en el array tenemos que 
            favoritos.push(id); //2) pushea el id al array vacio 

            this.setState({
                textoBoton: "Quitar de favoritos", //5) luego, cambia el texto del boton
            })
         }

        //Guardar en localStorage
        let favoritosToString = JSON.stringify(favoritos); //3) lo pasa a un string 
        localStorage.setItem("favoritos" , favoritosToString); //4) ese string termina dentro de local storage dentro de favoritos

        console.log(localStorage);
        console.log(localStorage.length);
    }

    mostrarmas_mostrarmenos(){
        this.setState({
            show:!this.state.show //modificando el estado de la propiedad show 
        })
    }

    render (){
        return(
            <article>
                <div>
                    <img className="img-js" src={`https://image.tmdb.org/t/p/w342${this.props.datosPeliculas.poster_path}`} alt="imagen" />
                </div>
                <button onClick = {()=> this.agregar_sacar(this.props.datosPeliculas.id)} type="button">{this.state.textoBoton}</button>
                <h2>{this.props.datosPeliculas.title}</h2>
                <p>Calificación: {this.props.datosPeliculas.vote_average}</p>
                <p>{this.state.show?this.state.text:""}</p>
                <button onClick={()=> this.mostrarmas_mostrarmenos()}>{this.state.show?"ver menos":"ver mas"}</button>
                <br/>
                <Link to={`/detalle/${this.props.datosPeliculas.id}`}><button>Ir a detalle</button></Link>
            </article>
        )
    } }

export default Card; 