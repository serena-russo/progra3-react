import React, {Component} from "react"; 
import Card from "../Card/Card"

class PeliculasTrending extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculasTrending: [],
        }
    }

    componentDidMount(){
        
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=6de7dccd8404bc4ded28289d4913aa5f&language=en-US&page=1'
        
        fetch(url)
        .then( response => response.json() )
        .then( data => this.setState({
            peliculasTrending: data.data
            })  )
        .catch( error => console.log(error))
           
    }
    

    render(){
            console.log(this.state)
            
            return(
                <section>
                    {this.state.peliculasTrending.slice([0,5]).map(function(todos){
                        return <Card datosPeliculasTrend={todos}/>
                    })}
                </section>
            )
        }
    }
    


export default PeliculasTrending;

