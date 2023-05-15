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
    const docRef = db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1
    }).then(() => {

    })
      .catch((error) => {
        console.log(error);
      });
  }

  onDecrease = (product) => {
    let { products } = this.state;
    const index = products.indexOf(product);
    const docRef = db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty - 1
    })
  };

  onDeleteProduct = (id) => {
    const { products } = this.state;
    const docRef = db.collection('products').doc(id);
    docRef.delete()
      .then(() => {

      })
      .catch((error) => {
        console.log(error);
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
  };

  addProduct = () => {
    db.collection("products").add({
      imgSourceURL: "https://m.media-amazon.com/images/I/714vSwERZUL._SL1500_.jpg",
      price: 1000,
      qty: 2,
      title: "Washing Machine"
    }).then((docRef) => {
      console.log("Product has been added..", docRef);
    }).catch((error) => {
      console.log(error)
    });
  };

  async componentDidMount() {
    db.collection("products").
      orderBy('price','desc').
      onSnapshot((snapshot) => {
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
        {/* <button onClick={this.addProduct} style={{ padding: 10 }}>Add product</button> */}
        <Cart products={products} onQtyIncreased={this.onIncrease}
          onQtyDecreased={this.onDecrease} onProductDelete={this.onDeleteProduct} />
        <div>Total :  Rs.{this.getCartTotalPrice()}</div>
      </div >
    );
  }
}
export default App;