import React from 'react'
import {Link} from "react-router-dom"
import {Container,Row,Col} from "react-bootstrap";
import Burger from "../../assets/assets/hero/hero-2.png"

function Section1() {
  return (
    
      <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                    <div className="position-relative">
                        <img src={Burger} alt="Hero" className='img-fluid' />
                        <div className='price_badge'>
                            <h4 className='h4_xs'>Only</h4>
                            <h4 className='h4_xs'>$6.99</h4>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1 className='text-white'>Jumbo Burger</h1>
                        <h2 className='text-white'>
                            With Onion
                        </h2>
                        <p className='text-white pt-2 pb-4'> 
                        Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat

                        </p>
                        <Link to="/" className="order_now ">Order Now</Link>
                    </div>
                    </Col>
            </Row>
        </Container>
      </section>
    
  )
}
import { Form } from 'react-router-dom'

export default Section1
