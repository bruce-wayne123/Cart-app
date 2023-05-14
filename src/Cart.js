
import CartItem from "./CartItem";

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {
                products.map((product) => {
                    return <CartItem key={product.id} product={product} onQtyIncreased={props.onQtyIncreased}
                        onQtyDecreased={props.onQtyDecreased} onProductDelete={props.onProductDelete} />
                })
            }
        </div>
    );
}

export default Cart;