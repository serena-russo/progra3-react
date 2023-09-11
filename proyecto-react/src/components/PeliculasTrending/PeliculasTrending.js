import React, {Component} from "react"; 

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
        .then( data => 
            this.setState({
            peliculasTrending: data.data
            })  )
        .catch( error => console.log(error))
           
    }
    

    render(){
            console.log(this.state)
            return(
                <section>

                </section>
            )
        }
    }
    


export default PeliculasTrending;

