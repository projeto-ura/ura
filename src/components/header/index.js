import React, { Component } from 'react' 
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import Styless from './react-awesome-button-master/src/styles/themes/theme-blue/index';



import './header.scss'

import logo from '../../img/logo-ura.png'
import logoFacebook from '../../img/logo-facebookv2.png'
import logoInstagram from '../../img/logo-instagramv2.png'
import logoGithub from '../../img/logo-githubv2.png'



export default class Header extends Component {
    render() {
        return (
                <header className="main-header">

                    <div className="header-content">

                        <div className="header-logo">
                            <a href="/" className="a-logo"><img src={logo} className="img-logo" alt=""></img></a>
                        </div>


                        <nav className="main-nav">
                            <ul className="ul-nav">
                                <li><a href="/ura/QuemSomos"><AwesomeButton type="primary" size="medium" >Quem Somos</AwesomeButton></a></li>
                                <li><a href="/ura/Tutoriais"><AwesomeButton type="primary" size="medium" >Tutoriais</AwesomeButton></a></li>
                                <li><a href="/ura/Notíciais"><AwesomeButton type="primary" size="medium" >Notíciais</AwesomeButton></a></li>
                                <li><a href="/ura/Metodologia"><AwesomeButton type="primary" size="medium" >Metodologia</AwesomeButton></a></li>
\                                <li><a href="/ura/FaleConosco"><AwesomeButton type="primary" size="medium" >Contato</AwesomeButton></a></li>
                            </ul>
                        </nav>


                        <div className="social-bar">
                            <a href="#"><img src={logoFacebook} className="logo-facebook"></img></a>
                            <a href="#"><img src={logoInstagram} className="logo-instagram"></img></a>
                            <a href="#"><img src={logoGithub} className="logo-github"></img></a>
                        </div>

                    </div>
                </header>    
        )
    }
}
