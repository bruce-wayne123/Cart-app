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
                    img: ''
                },
                {
                    id: 2,
                    price: 761,
                    title: "Watch",
                    qty: 4,
                    img: ''
                },
                {
                    id: 3,
                    price: 1238,
                    title: "Hai Dryer",
                    qty: 7,
                    img: ''
                }
            ]
        };
    }


    increaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log(this.state.qty);
        })
    };

    decreaseQuantity = () => {
        if (this.state.qty == 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }
    render() {
        const { products } = this.state;
        const { title, price, qty } = this.state;
        const arr = [1, 2, 3, 4, 5];
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return <CartItem product={product} key={product.id} />
                    })}
            </div>
        )
    }
}
export default Cart;