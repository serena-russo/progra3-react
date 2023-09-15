import React from "react";
import {Route, Switch} from "react-router-dom";


import PeliculasNowScreen from "./screens/PeliculasNow/PeliculasNowScreen";
import ResultadoBuscador from "./components/ResultadoBuscador/ResultadoBuscador";
import Favs from "./components/Favs/Favs";
import Home from "./screens/Home/Home";
import PeliculasTrendingScreen from "./screens/PeliculasTrendingScreen";
import NotFound from "./components/NotFound/NotFound";
import Detalle from "./components/Detalle/Detalle";



function App() {

 
 return (
  <React.Fragment>
  
    <Switch>

      <Route  path="/" exact={true} component={Home}></Route>
      <Route  path="/PeliculasTrending" component={PeliculasTrendingScreen}></Route>     
      <Route  path="/PeliculasNow" component={PeliculasNowScreen}></Route>
      <Route  path="/Favs" component={Favs}></Route>
      <Route  path="/search-results" component={ResultadoBuscador}></Route>
      <Route path="/detalle/:id" component={Detalle}></Route>
      <Route  path="" component={NotFound}></Route>
     </Switch>
 </React.Fragment>

 );
}
 export default App;
