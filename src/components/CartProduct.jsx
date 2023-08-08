import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { getProductData } from '../data/Items';
import { CartContext } from '../context/CartContext';

const CartProduct = ({ id, quantity }) => {

    const productData = getProductData(id)
    const cart = useContext(CartContext)

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p>{productData.title}</p>
                        <p>Quantity : {quantity}</p>
                        <p>Price : {quantity * productData.price}</p>
                        <Button
                            onClick={() => cart.deleteFromCart(id)}
                            size='sm'
                            className='mb-5 text-white'
                            variant='btn btn-outline-secondary'
                        >Remove</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CartProduct;
