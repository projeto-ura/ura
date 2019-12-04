import React, { Component } from 'react';
//import AwesomeSlider from 'react-awesome-slider';
import AutoplaySlider from './react-awesome-slider/src/hoc/autoplay/index';
import AwesomeSliderStyles from './react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss'

import './react-awesome-slider/src/styles'
import styles from './styles.scss'
import image01 from './img/01.JPG'
import image02 from './img/02.JPG'
import image03 from './img/03.JPG'
import image04 from './img/04.JPG'





export default class Carousel extends Component {
        render() {
        return (
            <div className="content-container">
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false}
                    interval={3500}
                    cssModule={styles}
                >
                    <div data-src={image01} />
                    <div data-src={image02} />
                    <div data-src={image03} />
                    <div data-src={image04} />
                </AutoplaySlider>
            </div>
        )
    }
}

