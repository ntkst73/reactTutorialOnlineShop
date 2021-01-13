import React from 'react'
import Logo from '../assets/img/pizza-logo.svg'
import {Link} from 'react-router-dom';

import { Button } from '../components';


const header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={Logo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Link to='/cart'>
                        <Button className='button--cart' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default header
