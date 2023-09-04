import React,{Component} from "react";
import

class Api extends Component {
    constructor(props){
        super(props)
        this.state = {
            datos:' '
         }
    }
    componentDidMount(){
        fetch ("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
            .then( response => response.json() )
            .then( data => this.setState(
        {datos: data.data.image_url}
        ))
            .catch( error => console.log(error))
        }
        
        
}
export default Api;