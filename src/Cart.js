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

    onIncrease = (product) => {
        let { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products
        });
    }

    onDecrease = (product) => {
        let { products } = this.state;
        const index = products.indexOf(product);
        if ((products[index].qty > 0)) {
            products[index].qty -= 1;
        }
        this.setState({
            products
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return <CartItem product={product} onQtyIncreased={this.onIncrease}
                            onQtyDecreased={this.onDecrease} />
                    })
                }
            </div>
        );
    }
}

export default Cart;