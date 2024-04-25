/** @format */

// ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{products.map((product) => (
				<div key={product.id} className='border p-4'>
					<h2 className='text-lg font-semibold'>{product.productName}</h2>
					<p>Company: {product.company}</p>
					<p>Category: {product.category}</p>
					<p>Price: ${product.price}</p>
					<p>Rating: {product.rating}</p>
					<p>Discount: {product.discount}%</p>
					<p>Availability: {product.availability}</p>
				</div>
			))}
		</div>
	);
};

export default ProductList;
