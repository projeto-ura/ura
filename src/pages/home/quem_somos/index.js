import React, { Component } from 'react';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import Styless from '../../../components/header/react-awesome-button-master/src/styles/themes/theme-blue';

// Styles

import './quem_somos.scss';


// Images
import Image from '../../../img/01.JPG'


import Sensor from '../../../img/sensor.jpg';

export default class QuemSomos extends Component {
    render() {
        return (
            <div className="container-quem-somos">

                <div className="container-text">
                    <h1 className="title-text">Quem Somos</h1>
                    <p>Acreditamos que a escola deve ser o lugar onde
                        os alunos despertem sua criatividade, deem vidas aos seus sonhos e construam
                        o seu próprio futuro. Além disso, atuamos com abordagens de ensino capazes 
                        de estimular o pensamento empreendedor na construção de conhecimentos, projetos
                        e propósitos de vida!</p>
                    <a href="" className="button-text"><AwesomeButton type="primary" size="large">Saiba Mais</AwesomeButton></a>    
                </div>

                <div className="container-image">
                    <img src={Image} className="image"></img>
                </div>

            </div>
        )
    }
}