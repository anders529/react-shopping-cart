import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// Context
import {ProductContext} from './contexts/ProductContext.js';
import {CartContext} from './contexts/CartContext.js';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
			setCart(cart=>[...cart, item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart}}>
					{/* Routes */}
					<Route exact path="/" component={Products}/>
					<Route path="/cart"	component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
