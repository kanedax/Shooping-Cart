import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { productList } from '../data/Items';
import ProductItem from '../components/ProductItem';

const Shop = () => {
    return (
        <Row xs={1} md={2} lg={4} className='g-4'>
            {
                productList.map((item) =>(
                    <Col align='center' key={item.id}>
                        <ProductItem product={item}/>
                    </Col>
                ))
            }
        </Row>
    );
}

export default Shop;
