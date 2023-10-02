import React, {Component} from "react"; 
import Card from "../Card/Card"
import Filtro from "../Filtro/Filtro";

class PeliculasNow extends Component {
    constructor(props){
        super(props);
        this.state = {
            PeliculasNow: [],
        }
    }

    //Peliculas Now
    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6de7dccd8404bc4ded28289d4913aa5f'
        fetch(url)
        .then( response => response.json() )
        .then( data => this.setState({
            PeliculasNow: data.results
            })  )
        .catch( error => console.log(error))
    }

    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas= this.state.PeliculasTrending.filter(function(unaPelicula){
            return unaPelicula.title.includes(textoAFiltrar)
        })
        this.setState({
            PeliculasTrending: peliculasFiltradas
        })
    }

    mostrarMas(){
        let url2= 'https://api.themoviedb.org/3/movie/popular?api_key=6de7dccd8404bc4ded28289d4913aa5f&page=+${this.state.page}'
        fetch(url2)
        .then( response => response.json() )
        .then( data => this.setState({
            PeliculasTrending: this.state.PeliculasTrending.concat(data.results),
            page: this.state.page+1
            })  )
        .catch( error => console.log(error))
    }

    render() {
        console.log(this.state);
        
        return (
            <div>
                <Filtro filtrado={(texto)=>this.filtrarPeliculas(texto)}/>
                {this.state.PeliculasNow === null || this.state.PeliculasNow === "" ? (
                    <h3>Cargando...</h3>
                ) : (
                    <section className="PeliculasPopulares">
                        {this.state.PeliculasNow.map((todos) => (
                            <Card key={todos.id} datosPeliculas={todos} />
                        ))}
                    </section>
                )}
                <button onClick={()=>this.mostrarMas(this.state.PeliculasTrending)}>Mostrar Mas</button>
            </div>
        );
    } // El if ternario ahi esta chequiando q peliculasTrending este nul Y vacio, para desp mostrar Card
      // (busca q ambas condiciones se cumplan para poder ejecutar lo que viene desp)


}      
export default PeliculasNow;