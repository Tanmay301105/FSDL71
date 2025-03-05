// import logo from './logo.svg';
// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Laptop", price: 999 },
//   { id: 2, name: "Phone", price: 499 },
//   { id: 3, name: "Headphones", price: 199 },
// ];

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>Simple E-Commerce</h1>

//       <h2>Products</h2>
//       {products.map((product) => (
//         <div key={product.id}>
//           <p>
//             {product.name} - ${product.price}
//             <button onClick={() => addToCart(product)} style={{ marginLeft: "10px" }}>
//               Add to Cart
//             </button>
//           </p>
//         </div>
//       ))}

//       <h2>Cart</h2>
//       {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item, index) => <p key={index}>{item.name}</p>)}
//     </div>
//   );
// }

import React, {useState} from "react";
import "./style.css";

const products = [
  {id : 1, name: "Laptop " , price: 150+"$"},
  {id:2 , name: "Mobile " , price:60+"$"},
  {id:3 , name: "Headphone " , price:40+"$"},
];

function App(){
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    // <div style={{ textAlign: "center", padding: "20px" }}>
    //   <h1>Ecoomerce webpage</h1>
    //   <h2>Products</h2>
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <p>
    //         {product.name} - ${product.price}
    //         <button onClick={() => addToCart(product)} style = {{marginLeft : "10px"}}>Add to Cart</button>
    //       </p>
    //     </div>
    //   ))}

    <div>
      <h1>Ecommerce Webpage</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Add Item</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><button onClick={() => addToCart(product)} style = {{marginLeft : "10px"}}>Add to Cart</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    
      <h2>Cart</h2>
      {cart.length === 0 ? <p> Cart is empty</p> : cart.map((item, index) => <p key={index}>{item.name}-{item.price}</p>)}
      <h3>Total</h3>
      {cart.length === 0 ? <p> item not yet added</p> : cart.map((item, index) => <p key={index}>{item.name}-{item.price}</p>)}

    </div>
  )


}







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
