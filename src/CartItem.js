import React from "react";

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: "Phone",
            qty: 1,
            img: ''
        };
    }

    increaseQuantity() {
        console.log(this);
    }
    render() {
        const { title, price, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "#777" }}>Rs. {price}</div>
                    <div style={{ color: "#777" }}>Quantity : {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://img.icons8.com/?size=512&id=24717&format=png" onClick={this.increaseQuantity} />
                        <img alt="decrease" className="action-icons" src="https://img.icons8.com/?size=512&id=1504&format=png" />
                        <img alt="delete" className="action-icons" src="https://img.icons8.com/?size=512&id=67884&format=png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: { height: 110, width: 110, borderRadius: 4, background: "#ccc" }
};

export default CartItem;