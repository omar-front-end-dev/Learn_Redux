/* eslint-disable react-hooks/exhaustive-deps */
import './Products.css'
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../RTK/slices/products-slice";
import { addToCart } from '../../RTK/slices/cart-slice';


export function Products() {
    const products = useSelector((state) => state.products)


    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProducts())
        
    }, [])

  return (
    <Container>
        <Row >
           {products.map((product) =>{
                return(
                    <Col key={product.id} className="my-4" lg={4} sm={6}>
                        <Card>
                            <Card.Img className="card__img" src={product.image} alt={product.title}/>
                            <Card.Body>
                                <Card.Title>{product.title.slice(0,25)}</Card.Title>
                                    <Card.Text>
                                        <p className=' text-black-50'>{product.description.slice(0,50)}</p>
                                        <p className='text-danger'>{product.price} $</p>
                                    </Card.Text>
                                <Button onClick={() => dispatch(addToCart(product))} className='w-100' variant="primary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
           })}
        </Row>
    </Container>
  )
}
