import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChooseUs from '../../components/choose-us/ChooseUs';
import HeroSlider from '../../components/hero-slider/HeroSlider';
import MenuPack from '../../components/menu-pack/MenuPack';
import PopularMenu from '../../components/popular-menu/PopularMenu';
import HomeHeader from './Header/HomeHeader';
import './HomePage.scss';


class HomePage extends Component {

    render() {
        return (
            <div className='full'>
                <HomeHeader/>
                <HeroSlider/>
                <PopularMenu/>
                <ChooseUs/>
                <MenuPack/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
