import React, { Component } from 'react'
import './header.scss'
import logo from '../../img/logo.png'
import logoFacebook from '../../img/logo-facebook.png'
import logoInstagram from '../../img/logo-instagram.png'
import logoGithub from '../../img/logo-github.png'


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
                                <li className="ul-li"><a className="li-a" href="/">Início</a></li>
                                <li><a href="/QuemSomos">Quem somos</a></li>
                                <li><a href="/Tutoriais">Tutoriais</a></li>
                                <li><a href="Notíciais">Noticías</a></li>
                                <li><a href="/Metodologia">Metodologia</a></li>
                                <li><a href="/FaleConosco">Fale Conosco</a></li>
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
