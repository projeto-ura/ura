import React, { Component } from 'react';

// Components


import Wallpaper from './wallpaper/index';
import QuemSomos from './quem_somos/index';
import Carousel from './carousel/index';
import Contador from './contador/index';
import Parceiros from './parceiros/index';

// Styles

import './main.css';



export default class Home extends Component {
    render() {
        return (
            <div className="container-content" >


                <Wallpaper />

                <QuemSomos />

                <Contador />
                
                <Carousel />
                
                
                
            </div>
        )
    }
    
}