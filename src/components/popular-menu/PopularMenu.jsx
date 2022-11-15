

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { popularMenuFood } from '../../assets/fake-data/products.js'
import ProductCard from '../product-card/ProductCard.jsx'
import './PopularMenu.scss'

const PopularMenu = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <h2>Popular food menu</h2>
                </Col>
                {
                    popularMenuFood.map((item)=>(
                        <Col lg="3" key={item.id}>
                            <ProductCard item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default PopularMenu