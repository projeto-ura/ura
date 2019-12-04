import React, { Component } from 'react';
import './style.css';
import Carousel from './carousel/index'

import Sensor from '../../../img/sensor.jpg'

export default class Main extends Component {
    render() {
        return (
            <div className="container-content">

                <div className="container-wallpaper">
                    
                </div>


                <div className="container-quem-somos">

                    <div className="text-quem-somos">
                        <h1>Quem Somos</h1>
                        <p>Acreditamos que a escola deve ser o lugar onde
                            os alunos despertem sua criatividade, deem vidas aos seus sonhos e construam
                            o seu próprio futuro. Além disso, atuamos com abordagens de ensino capazes 
                            de estimular o pensamento empreendedor na construção de conhecimentos, projetos
                            e propósitos de vida!</p>
                    </div>

                    <div className="container-image">
                        <img src={Sensor} className="image"></img>
                    </div>

                </div>


                <div className="container-carousel">
                    <div className="main-carousel">
                        < Carousel className="carousel"/>
                    </div>
                    
                </div>

                <div className="container-card">


                </div>

            </div>
        )
    }
}