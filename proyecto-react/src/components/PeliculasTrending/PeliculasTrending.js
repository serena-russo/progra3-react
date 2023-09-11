import React, {Component} from "react"; 
import Card from "../Card/Card"

class PeliculasTrending extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculasNow: [],
            peliculasTrending: [],
        }
    }

    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=6de7dccd8404bc4ded28289d4913aa5f'
        
        fetch(url)
        .then( response => response.json() )
        .then( data => this.setState({
            peliculasTrending: data.results
            })  )
        .catch( error => console.log(error))
           
    }

   // let url2= ''
   //falta un if ternario dentro del return

    render(){
        console.log(this.state)
            
            return(
                <section>
                    
                    {this.state.peliculasTrending.map(function(todos){
                        return <Card key= {todos.id} datosPeliculasTrend={todos}/>
                    })}
                </section>
            )
        }
    }
    


export default PeliculasTrending;

