import { Container, Table, Button } from "react-bootstrap";
import './Cart.css';
import { useDispatch, useSelector } from "react-redux";
import { clearCarts, deleteFromCart } from "../../RTK/slices/cart-slice";

export function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const totalPrice = cart.reduce((acc, product) =>{
            acc+= product.price * product.quantity;
            return acc;
    }, 0)
  return (
    <Container>
            <h1 className="my-4">Welcome To Cart</h1>
            <Button onClick={() => dispatch(clearCarts())} className="mb-4" variant="primary">Clear All</Button>
            <h4 className="text-danger">Total Price : <strong className=" text-success">{totalPrice.toFixed(2)} $</strong></h4>
            <div className="table">
                <Table className="table__cart p-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>quantity</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) =>{
                            return(
                                <tr key={product.id}>
                                    <td>{product.price}$</td>
                                    <td>
                                        <img className="image__cart" src={product.image} alt={product.title} />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        {product.quantity}
                                    </td>
                                    <td>
                                        <Button onClick={() => dispatch(deleteFromCart(product))} variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
    </Container>
  )
}
