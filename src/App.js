import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clearTotal, setClearTotal] = useState(false);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    const storedTotalPrice = parseFloat(localStorage.getItem('totalPrice'));

    if (storedProducts) {
      setProducts(storedProducts);
    }

    if (storedTotalPrice) {
      setTotalPrice(storedTotalPrice);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('totalPrice', totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    if (clearTotal) {
      setTotalPrice(0);
      setClearTotal(false);
    }
  }, [clearTotal]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleAddProduct = () => {
    if (productName.length < 8 || productName.length > 64) {
      alert('O nome do produto deve ter entre 8 e 64 caracteres.');
      return;
    }

    const newProduct = {
      name: productName,
      price: null,
      bought: false,
    };

    setProducts([...products, newProduct]);
    setProductName('');
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleProductBought = (index) => {
    const updatedProducts = [...products];
    const priceString = prompt('Digite o valor da compra (R$):');
    const price = parseFloat(priceString.replace(',', '.'));

    if (!isNaN(price)) {
      updatedProducts[index].bought = true;
      updatedProducts[index].price = price;
      setProducts(updatedProducts);
      setTotalPrice(totalPrice + price);
    } else {
      alert('Valor inválido.');
    }
  };

  const handleClearTotal = () => {
    setClearTotal(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <input
          type="text"
          placeholder="Digite o nome do produto"
          value={productName}
          onChange={handleProductNameChange}
        />
        <button onClick={handleAddProduct}>Adicionar</button>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
            <input
              type="checkbox"
              checked={product.bought}
              onChange={() => handleProductBought(index)}
            />
            <span>{product.name}</span>
            <button onClick={() => handleDeleteProduct(index)}>Excluir</button>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Valor total: R${totalPrice.toFixed(2)}</p>
        <button onClick={handleClearTotal} className='clear-button'>Limpar</button>
      </div>
      <Footer />
    </div>

  );
};

export default App;
