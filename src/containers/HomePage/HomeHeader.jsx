import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                    </div>

                    <div className='center-content'>
                        <ul className='list'>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>

                    <div className='right-content'>
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
