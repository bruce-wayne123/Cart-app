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
                    imgSourceURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJg7S_Q0rp7iKHtZA5UQOllLEAtQximiKJHg&usqp=CAU",
                },
                {
                    id: 2,
                    price: 761,
                    title: "Watch",
                    qty: 4,
                    imgSourceURL: "https://5.imimg.com/data5/SELLER/Default/2020/12/KN/WP/OI/5388819/t500-smartwatch-250x250.jpg",
                },
                {
                    id: 3,
                    price: 1238,
                    title: "Hai Dryer",
                    qty: 7,
                    imgSourceURL: "https://5.imimg.com/data5/VU/UH/MY-3144743/hilips-hp-8234-hairdryer-500x500.jpg",
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

    onDeleteProduct = (id) => {
        const { products } = this.state;
        const items=products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        });
    };

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return <CartItem product={product} onQtyIncreased={this.onIncrease}
                            onQtyDecreased={this.onDecrease} onProductDelete={this.onDeleteProduct}/>
                    })
                }
            </div>
        );
    }
}

export default Cart;