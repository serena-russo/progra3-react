import React, {Component} from "react";
import CardDetalle from "../CardDetalle/CardDetalle";


class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
            datospeli:[],
            generos:[],
        }
    }
    componentDidMount(){
        let url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=6de7dccd8404bc4ded28289d4913aa5f`

        fetch(url)
        .then( response => response.json() )
        .then( data => this.setState({
            datospeli: data,
            generos: data.genres.map(genre=>genre.name)
            })  )
        .catch( error => console.log(error))
    }

    render(){
        return(
            <div>
            {this.state.datospeli === null || this.state.datospeli === "" ? (
                <h3>Cargando...</h3>
            ) :(
                <section className="Contenedorpadre">
                <CardDetalle datospeli={this.state.datospeli} generos={this.state.generos}/>
                </section>
            )}
            </div>
        )
        
    }
}

export default Detalle
