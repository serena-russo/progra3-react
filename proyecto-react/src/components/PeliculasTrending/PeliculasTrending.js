import React, {Component} from "react"; 
import Card from "../Card/Card"
import Filtro from "../Filtro/Filtro";

class PeliculasTrending extends Component {
    constructor(props){
        super(props);
        this.state = {
            PeliculasTrending: [],
            page:1,
            boton: false
        }
    }

    //Peliculas Now
    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=6de7dccd8404bc4ded28289d4913aa5f'
        fetch(url)
        .then( response => response.json() )
        .then( data => this.setState({
            PeliculasTrending: data.results
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
            <section>
                <Filtro filtrado={(texto)=>this.filtrarPeliculas(texto)}/>
                {this.state.PeliculasTrending === null || this.state.PeliculasTrending === "" ? (
                    <h3>Cargando...</h3>
                ) : (
                    <div className="PeliculasPopulares">
                        {this.state.PeliculasTrending.map((todos) => (
                            <Card key={todos.id} datosPeliculas={todos} />
                        ))}
                    </div>
                )}
                <button onClick={()=>this.mostrarMas(this.state.PeliculasTrending)}>Mostrar Mas</button>
            </section>
        );
    } // El if ternario ahi esta chequiando q peliculasTrending este nul Y vacio, para desp mostrar Card
      // (busca q ambas condiciones se cumplan para poder ejecutar lo que viene desp) 
}

export default PeliculasTrending;