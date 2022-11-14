import React, { Component, useRef } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { Container } from 'reactstrap';

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    },
]

class HomeHeader extends Component {

    render() {

        return (
            <header className='header'>
                <Container>
                        <div className='navigation'>
                            <div className="logo">
                                <h2>
                                    <span>
                                        <i class="ri-restaurant-2-line"></i>
                                    </span>{" "}
                                    EatingNow.
                                </h2>
                            </div>
                            

                            <div className="nav__menu">
                                <div className="nav__list__wrapper">
                                    <ul className="nav__list">
                                        {
                                            navLinks.map((item, index) =>(
                                                <li className="nav__item" key={index}>
                                                    <a href={item.url}>{item.display}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="menu__right">
                                        <div className="custom__search">
                                            <input type="text" placeholder='Search items....' />
                                            <span><i class="fas fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className='cart__icon'>
                                    <i class="fas fa-shopping-bag"></i>
                                    <span className='badge'>2</span>
                                </span>
                            </div>
                            
                            <div className="moble__menu">
                                <span><i class="fas fa-bars"></i></span>
                            </div>
                        </div>
                </Container>
            </header>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
