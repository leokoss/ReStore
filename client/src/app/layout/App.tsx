import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
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
      pictureUrl: 'http://picsum.photos/200'}]
    )
  }

  return (
    <>
      <Typography variant='h1'>ReStore</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
