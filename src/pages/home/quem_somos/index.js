import React, { Component } from 'react';

// Styles

import './quem_somos.scss';


// Images

import Sensor from '../../../img/sensor.jpg';

export default class QuemSomos extends Component {
    render() {
        return (
            <div className="container-quem-somos">

                <div className="container-text">
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
        )
    }
}