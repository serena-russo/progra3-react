import React, {Component} from "react"; 
import Card from "../Card/Card"

class PeliculasTrending extends Component {
    constructor(props){
        super(props);
        this.state = {
            PeliculasTrending: [],
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


    render() {
        console.log(this.state);
        
        return (
            <section>
                {this.state.PeliculasTrending === null || this.state.PeliculasTrending === "" ? (
                    <h3>Cargando...</h3>
                ) : (
                    <div class="PeliculasPopulares">
                        {this.state.PeliculasTrending.map((todos) => (
                            <Card key={todos.id} datosPeliculasTrend={todos} />
                        ))}
                    </div>
                )}
            </section>
        );
    } // El if ternario ahi esta chequiando q peliculasTrending este nul Y vacio, para desp mostrar Card
      // (busca q ambas condiciones se cumplan para poder ejecutar lo que viene desp) 
}
export default PeliculasTrending;
