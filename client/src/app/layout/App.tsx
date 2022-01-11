import { useEffect, useState } from "react";
import { Product } from "../models/product";



function App() {
  const [products, setProducts]= useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ProductsControler')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product'+(prevState.length + 1),
      price: (prevState.length*100)+100,
      description: 'somedescription',
      brand: 'somebrand' + (prevState.length + 1),
      pictureUrl: 'http://picksum.photos/200'}]
    )
  }

  return (
    <div className='app'>
      <h1>ReStore</h1>
      <ul>
        {products.map(product =>(
          <li key={product.id}>{product.name} - {product.price} - {product.brand}</li>
        ))}
      </ul>
      <button onClick={addProduct}>AddProduct</button>
    </div>
  );
}

export default App;
