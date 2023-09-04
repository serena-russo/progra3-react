import React,{Component} from "react";

class Api extends Component {
    constructor(props){
        super(props)
        this.state = {
            datos:' '
         }
    }
    componentDidMount(){
        fetch('')
            .then( response => response.json() )
            .then( data => this.setState(
        {datos: data.data.image_url}
        ))
            .catch( error => console.log(error))
        }
        
        
}