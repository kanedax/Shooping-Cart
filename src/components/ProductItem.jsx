import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const ProductItem = ({ product }) => {

    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <Card className='mt-5 cart-bg'>
            <Card.Body>
                <Card.Img
                    className='hover'
                    variant='top'
                    src={product.image}
                    height='200px'
                    style={{ objectFit: 'cover' }} />
                <Card.Title className='text-light pt-4'>{product.title}</Card.Title>
                <Card.Text className='text-light'>Price : {product.price} $</Card.Text>
                {
                    productQuantity > 0 ? (
                        <>
                            <Form as={Row}>
                                <Form.Label column='true' sm='6' className='text-white'>
                                    Quantity : {productQuantity}
                                </Form.Label>
                                <Col sm='6'>
                                    <Button sm='6'
                                        className='mx-2 text-white'
                                        variant='btn btn-outline-secondary'
                                        onClick={() => cart.addItemToCart(product.id)}
                                    >+</Button>
                                    <Button sm='6'
                                        className='mx-2 text-white'
                                        variant='btn btn-outline-secondary'
                                        onClick={() => cart.removeItemFromCart(product.id)}
                                    >-</Button>
                                </Col>
                            </Form>
                            <Button
                                className='mt-4'
                                variant='btn btn-light'
                                onClick={() => cart.deleteFromCart(product.id)}
                            >Remove From Cart</Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => cart.addItemToCart(product.id)}
                            variant='btn btn-outline-secondary'
                            className='text-white'
                        >
                            Add To Shopping Cart
                        </Button>
                    )
                }
            </Card.Body>
        </Card>
    );
}

export default ProductItem;
