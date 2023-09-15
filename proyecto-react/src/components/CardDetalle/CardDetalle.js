import React, {Component} from "react";


class CardDetalle extends Component {
    constructor(props){
        super(props);
        this.state={
            textoBoton: "Agregar a favoritos",
        }
    }
    componentDidMount(){
    //Chequear si el id está en el array de favoritos
    let recuperoStoragePelis= localStorage.getItem("favoritos");
    if (recuperoStoragePelis !== null){
        let favoritos = JSON.parse(recuperoStoragePelis);

        //si esta el id, necesito cambiar el texto del boton
        if (favoritos.includes(this.props.datospeli.id)){
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }
    
    }
    
    }
    agregar_sacar(id) {
        let favoritos = []
        let recuperoStoragePelis = localStorage.getItem("favoritos");
    

        if (recuperoStoragePelis !== null){
            favoritos = JSON.parse(recuperoStoragePelis);
        }

        if (favoritos.includes(id)){
            favoritos = favoritos.filter (unId => unId !== id)
        
        
        //Mostrarle un cambio al usuario en pantalla
        this.setState({
            textoBoton: "Agregar a favoritos"
        })  
    
        } else {
            //si el id NO ESTA en el array tenemos que 
            favoritos.push(id);

            this.setState({
                textoBoton: "Quitar de favoritos",
            })
         }

        //Guardar en localStorage
        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem("favoritos" , favoritosToString);

        console.log(localStorage);
        console.log(localStorage.length);
    }

    render (){
        console.log(this.props)
        return(
            <article>
                <h2 >{this.props.datospeli.title}</h2>
                <div>
                    <img className="img-js" src={`https://image.tmdb.org/t/p/w342${this.props.datospeli.poster_path}`} alt="imagen" />
                </div>
                <button onClick = {()=> this.agregar_sacar(this.props.datospeli.id)} type="button">{this.state.textoBoton}</button>
                <p>Calificación: {this.props.datospeli.vote_average} </p>
                <p>Fecha estreno: {this.props.datospeli.release_date}</p>
                <p>Duracion: {this.props.datospeli.runtime}</p>
                <p>Sinopsis: {this.props.datospeli.overview}</p>
                <p>Generos: {this.props.generos.join(" ")}</p>
                
            </article>
        )

    }  }

export default CardDetalle; 