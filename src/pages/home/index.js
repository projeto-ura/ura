import React, { Component } from 'react';

import './main.css';
import Main from './main';

export default class Home extends Component {
    render() {
        return (
            <div className="content-container" >

                
                <div className="main-container">
                    <Main />    
                </div>
                

            </div>
        )
    }
    
}