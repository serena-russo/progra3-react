import React from "react";
import PeliculasTrending from "../components/PeliculasTrending/PeliculasTrending";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function PeliculasTrendingScreen (){
    return (
       
        <body>               
            <Header />
             <br/>
            <PeliculasTrending/ >
                 
            <Footer/>

        </body>   
    )
}

export default PeliculasTrendingScreen;