import React from "react";
import './App.css';
import Cart from "./Cart";
import Navbar from './Navbar';
import db from "./firebase";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
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
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    });
  };

  getCartsCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  }

  getCartTotalPrice = () => {
    const { products } = this.state;
    let totalPrice = 0;

    products.forEach(product => {
      totalPrice += (product.qty * product.price);
    });

    return totalPrice;
  }

  async componentDidMount() {
    db.collection("products").onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({
        products: products,
        loading: false
      });
    });
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div>
        {loading && <h1>Loading Products..</h1>}
        <Navbar count={this.getCartsCount()} />
        <Cart products={products} onQtyIncreased={this.onIncrease}
          onQtyDecreased={this.onDecrease} onProductDelete={this.onDeleteProduct} />
        <div>Total :  Rs.{this.getCartTotalPrice()}</div>
      </div >
    );
  }
}
export default App;