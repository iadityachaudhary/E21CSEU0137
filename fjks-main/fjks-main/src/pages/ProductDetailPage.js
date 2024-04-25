/** @format */

// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import ProductDetails from '../components/ProductDetails';
import { getProductById } from '../api'; // Assuming you have an API function to fetch a product by ID

const ProductDetailPage = ({ match }) => {
	const [product, setProduct] = useState(null);
	const productId = match.params.id; // Assuming the product ID is passed as a URL parameter

	useEffect(() => {
		// Fetch product details when component mounts
		fetchProduct();
	}, []);

	const fetchProduct = async () => {
		try {
			// Fetch product details by ID
			const { data } = await getProductById(productId);
			setProduct(data);
		} catch (error) {
			console.error('Error fetching product details:', error);
		}
	};

	return (
		<div>
			<h1 className='text-2xl font-semibold mb-4'>Product Details</h1>
			{product ? <ProductDetails product={product} /> : <p>Loading...</p>}
		</div>
	);
};

export default ProductDetailPage;
