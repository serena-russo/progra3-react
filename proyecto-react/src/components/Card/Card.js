import React, {Component} from "react";


class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            textoBoton: "Agregar a favoritos",
        }
    }

    componentDidMount(){
    //Chequear si el id está en el array de favoritos
    
    }

    agregar_sacar(id) {
        let favoritos = []
        let recuperoStoragePelis = localStorage.getItem("favoritos");

        if (recuperoStoragePelis !== null){
            favoritos = JSON.parse(recuperoStoragePelis);
        }

        if (favoritos.include(id)){
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
    }
    

    render (){
        return(
        <section className="">
            
            <img src={this.props.datosPeliculasTrend.poster_path} alt="imagen" />
            <button onClick = {()=> this.agregar_sacar(this.props.datosPeliculasTrend.id)} type="button">{this.state.textoBoton}</button>
            <h2>{this.props.datosPeliculasTrend.title}</h2>
            <p> Calificación: {this.props.datosPeliculasTrend.vote_average} </p>
            <p> Descripción: {this.props.datosPeliculasTrend.overview} </p>

        </section>
        )

    }  }

export default Card; 