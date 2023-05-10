import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    price: 9999,
                    title: "Smart Phone",
                    qty: 2,
                    img: "",
                },
                {
                    id: 2,
                    price: 761,
                    title: "Watch",
                    qty: 4,
                    img: "",
                },
                {
                    id: 3,
                    price: 1238,
                    title: "Hai Dryer",
                    qty: 7,
                    img: "",
                },
            ],
        };
    }

    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products,
        });
    };
    render() {
        const { products } = this.state;
        const { title, price, qty } = this.state;
        const arr = [1, 2, 3, 4, 5];
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                        />
                    );
                })}
            </div>
        );
    }
}
export default Cart;
