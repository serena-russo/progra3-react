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

    render (){
        return(
        <section className="">

            <img src={this.props.datosPeliculasTrend.poster_path} alt={this.props.peliculasTrending.title} />
            <h2>{this.props.datosPeliculasTrend.title}</h2>
            <p>Calificación: {this.props.datosPeliculasTrend.vote_average} </p>
            <p>Descripcion: {this.props.datosPeliculasTrend.overview}</p>
        </section>
        )

    }  }

export default Card; 