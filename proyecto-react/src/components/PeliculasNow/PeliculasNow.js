import React, {Component} from "react"; 
import Card from "../Card/Card"

class PeliculasNow extends Component {
    constructor(props){
        super(props);
        this.state = {
            PeliculasNow: [],
        }
    }

    //Peliculas Now
    componentDidMount(){
        let url = ''
        fetch(url)
        .then( response => response.json() )
        .then( data => this.setState({
            PeliculasNow: data.results
            })  )
        .catch( error => console.log(error))
    }


    render() {
        console.log(this.state);
        
        return (
            <section>
                {this.state.PeliculasNow === null || this.state.PeliculasNow === "" ? (
                    <h3>Cargando...</h3>
                ) : (
                    <div>
                        {this.state.PeliculasNow.map((todos) => (
                            <Card key={todos.id} datosPeliculasNowww={todos} />
                        ))}
                    </div>
                )}
            </section>
        );
    } // El if ternario ahi esta chequiando q peliculasTrending este nul Y vacio, para desp mostrar Card
      // (busca q ambas condiciones se cumplan para poder ejecutar lo que viene desp)


}      
export default PeliculasNow;