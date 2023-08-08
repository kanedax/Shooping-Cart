import React, { useContext, useState } from 'react';
import { Navbar as NavbarBs, Button, Modal, ModalHeader, Row, Col } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import { CartContext } from '../context/CartContext';
import CartProduct from './CartProduct';

const Navbar = () => {

    const [ShowModal, setShowModal] = useState(false)
    const cart = useContext(CartContext)
    const productCounts = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    const handleShow = () => { setShowModal(true) }
    const handleClose = () => { setShowModal(false) }

    return (
        <div>
            <NavbarBs className='border-bottom border-secondary'>
                <NavbarBs.Collapse className='justify-content-end'>
                    <Button
                        onClick={handleShow}
                        variant='btn btn-outline-secondary'
                        className='text-white'>
                        ( {productCounts} )
                        <BsCart className='mx-2'></BsCart>
                        Shopping Cart
                    </Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={ShowModal} onHide={handleClose} contentClassName='cart-bg'>
                <Modal.Header>
                    <Modal.Body>
                        {productCounts > 0 ? (
                            <>
                                <h3 className='mb-2 square border-bottom pb-3 ' align='center'>Shopping Cart</h3>
                                {cart.items.map((item) => (
                                    <CartProduct
                                        key={item.id}
                                        id={item.id}
                                        quantity={item.quantity}>
                                    </CartProduct>
                                ))}
                                <h3 align='center'>Total Price : {cart.getTotalAmount()} $</h3>
                            </>
                        ) : (
                            <h3 className='mx-5'>Cart Is Empty</h3>
                        )}
                        <Button
                            variant='btn btn-outline-secondary'
                            className='mt-4 text-white d-grid col-12 mx-auto'
                            onClick={handleClose}
                        >Close</Button>
                        {
                            productCounts > 0 ? (
                                <Button
                                    variant='btn btn-outline-secondary'
                                    className='mt-2 text-white d-grid col-12 mx-auto'
                                >Place Order</Button>
                            ) : null
                        }
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </div>
    );
}

export default Navbar;
