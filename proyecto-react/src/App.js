import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Peliculas from "./components/Peliculas/Peliculas";
import PeliculasNowScreen from "./screens/PeliculasNowScreen";
import Buscador from "./components/Buscador/Buscador";
import ResultadoBuscador from "./components/ResultadoBuscador/ResultadoBuscador";
import Favs from "./components/Favs/Favs";
import Home from "./screens/Home/Home";
import PeliculasTrendingScreen from "./screens/PeliculasTrendingScreen";
import PeliculasTrending from "./components/PeliculasTrending/PeliculasTrending";
import NotFound from "./components/NotFound/NotFound";



function App() {

 
 return (
  <React.Fragment>
  
    <Switch>

      <Route  path="/" exact={true} component={Home}></Route>
      <Route  path="/PeliculasTrending" component={PeliculasTrendingScreen}></Route>     
      <Route  path="/PeliculasNow" component={PeliculasNowScreen}></Route>
      <Route  path="/Favs" component={Favs}></Route>
      <Route  path="ResultadoBuscador" component={ResultadoBuscador}></Route>
      <Route  component={NotFound}></Route>
     </Switch>
 </React.Fragment>

 );
}
 export default App;
