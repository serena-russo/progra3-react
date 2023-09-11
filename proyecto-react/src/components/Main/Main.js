import React, {Component} from "react"; //componente con estado PQ va a interactuar con el usuario

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas: [], 
            peliculasTrending: [],
        }
    }

    componentDidMount(){
        // console.log('DidMount'); //creo que se hacia asi para ver si funciona 
        let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        
        fetch(url)
        .then( response => response.json() )
            .then( data => this.setState({
                    peliculas: data.data
                })
            .catch( error => console.log(error))
            )
        }
    }

/// hay que hacer otro component did mount con la otra url de peliculas trending? 

    render() {
        return (
            <React.Fragment>
            
            </React.Fragment>
        );
    };


export default Main;

