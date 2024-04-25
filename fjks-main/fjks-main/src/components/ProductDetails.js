/** @format */

// ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
	return (
		<div className='border p-4'>
			<h2 className='text-lg font-semibold'>{product.productName}</h2>
			<p>Company: {product.company}</p>
			<p>Category: {product.category}</p>
			<p>Price: ${product.price}</p>
			<p>Rating: {product.rating}</p>
			<p>Discount: {product.discount}%</p>
			<p>Availability: {product.availability}</p>
			{/* Add more details as needed */}
		</div>
	);
};

export default ProductDetails;
