import React, {Component} from "react"; 
import Card from "../Card/Card"
import {Link} from "react-router-dom"

class Peliculas extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculasTrending: [],
            peliculasNow: [],
        }
    }

    //Pelixulas Trending
    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=6de7dccd8404bc4ded28289d4913aa5f'
        let url2= 'https://api.themoviedb.org/3/movie/now_playing?api_key=6de7dccd8404bc4ded28289d4913aa5f'

        fetch(url)
        .then( response => response.json() )
        .then( data => this.setState({
            peliculasTrending: data.results
            })  )
        .catch( error => console.log(error))

        fetch(url2)
        .then( response => response.json() )
        .then( data => this.setState({
            peliculasNow: data.results
            })  )
        .catch( error => console.log(error))
    }


    render() {
        console.log(this.state);
        
        return (
            <React.Fragment>
                <div>
                    <h1 className="titulos"><Link to="/PeliculasTrending">Peliculas Trending</Link></h1>
                    {this.state.peliculasTrending === null || this.state.peliculasTrending === "" ? (
                        <h3>Cargando...</h3>
                    ) : (
                        <section className="PeliculasPopulares">
                            {this.state.peliculasTrending.slice(0,5).map((todos) => (
                                <Card key={todos.id} datosPeliculas={todos} />
                            ))}
                        </section>
                    )}   
                </div>
                <div>
                    <h1 className="titulos"><Link to="/PeliculasNow">Peliculas Now Playing</Link></h1>
                    {this.state.peliculasNow === null || this.state.peliculasNow === "" ? (
                        <h3>Cargando...</h3>
                    ) : (
                        <section className="PeliculasPopulares">
                            {this.state.peliculasNow.slice(0,5).map((todos) => (
                                <Card key={todos.id} datosPeliculas={todos} />
                            ))}
                        </section>
                    )}   
                </div>
            </React.Fragment>
        );
    } // El if ternario ahi esta chequiando q peliculasTrending este nul Y vacio, para desp mostrar Card
      // (busca q ambas condiciones se cumplan para poder ejecutar lo que viene desp)


}      
export default Peliculas;