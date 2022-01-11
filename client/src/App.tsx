import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts]= useState([
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 200.00}
    
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ProductsControler')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, {name: 'product'+(prevState.length + 1), price: (prevState.length*100)+100}]
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
