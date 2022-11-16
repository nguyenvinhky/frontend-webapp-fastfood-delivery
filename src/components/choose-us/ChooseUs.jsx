

import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import './choose-us.scss'
import  pastaImg from '../../assets/images/pasta.png'

const ChooseUs = () => {
  return <section>
        
        <Container>
            <div className="Container">
                <Row>
                    <Col lg='6'>
                        <img src={pastaImg} alt="" className='choose__img'/>
                    </Col>

                    <Col lg='6'>
                        <div className="choose__content">
                            <h4>Who are you?</h4>
                            <h2>Take a look at benefits we offer you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                                officiis impedit re neque minus adipisci.
                            </p>
                        </div>

                        <div className="features">
                            <div className="feature1">
                                <div className="single__feature1">
                                    <span className='feature__icon-1'>
                                        <i class="ri-truck-line">
                                    </i></span>
                                    <h6>Free Home Delivery</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>

                                <div className="single__feature2">
                                    <span className='feature__icon-2'>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </span>
                                    <h6>Return & Refund</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>

                            <div className="feature2">
                                <div className="single__feature3">
                                    <span className='feature__icon-3'>
                                        <i class="ri-secure-payment-line"></i>
                                    </span>
                                    <h6>Secure Payment</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>

                                <div className="single__feature4">
                                    <span className='feature__icon-4'>
                                        <i class="ri-24-hours-line"></i>
                                    </span>
                                    <h6>Return & Refund</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
  </section>
}

export default ChooseUs