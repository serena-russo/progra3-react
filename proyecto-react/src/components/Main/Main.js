import React, {Component} from "react"; //componente con estado

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas: [], 
            peliculasTrending: [],
        }
    }

    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        
        fetch(url)
        .then( response => response.json() )
            .then( data => this.setState({
                    datos:data.data
                })
            .catch( error => console.log(error))
            )
        }
        
    }

    render() {
        return (
            <React.Fragment>
            
            </React.Fragment>
        );
    };
}

export default Main;

