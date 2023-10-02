import React, {Component} from 'react';
import Card from "../Card/Card"


class ResultadoBuscador extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculaBuscada:[], //para guardar resultados d busqueda
        }

    }
    
    componentDidMount(){
        //buscamos datos
        let url = `https://api.themoviedb.org/3/search/movie?api_key=6de7dccd8404bc4ded28289d4913aa5f&language=en-US&query=${this.props.match.params.buscado}&page=1&include_adult=false)`

        fetch(url)           
        .then( res => res.json())
            .then( data => this.setState({
                peliculaBuscada: data.results,
            }))
            .catch( error => console.log(error) )
    }

    render(){    
        return(
          <React.Fragment>
            <section className="section">
                <h2 className="titulos">Resultados de Busqueda</h2> 
                <div>  
                    
                    {this.state.peliculaBuscada.length >0?
                    
                    <section className="PeliculasPopulares">
                        {
                            this.state.peliculaBuscada.slice(0,12).map(
                                (pelicula,idx) => <Card key={pelicula + idx} datosPeliculas={pelicula}/>
                            )
                        }
                    </section>:
                    <h3> Cargando...</h3> }
                </div>
            </section>
          </React.Fragment>
        )
    }
}

export default ResultadoBuscador