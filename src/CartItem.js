import React from "react";


const CartItem = (props) => {
    const { product } = props;
    const { onQtyIncreased, onQtyDecreased, onProductDelete } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.imgSourceURL} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 20 }}>{product.title}</div>
                <div style={{ color: "#777" }}>Rs. {product.price} </div>
                <div style={{ color: "#777" }}>Quantity :  {product.qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase" className="action-icons"
                        src="https://img.icons8.com/?size=512&id=24717&format=png" onClick={() => { onQtyIncreased(product) }}
                    />
                    <img alt="decrease" className="action-icons"
                        src="https://img.icons8.com/?size=512&id=1504&format=png" onClick={() => { onQtyDecreased(product) }} />
                    <img alt="delete" className="action-icons"
                        src="https://img.icons8.com/?size=512&id=67884&format=png" onClick={() => { onProductDelete(product.id) }} />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: { height: 110, width: 110, borderRadius: 4, background: "#ccc" }
};

export default CartItem;