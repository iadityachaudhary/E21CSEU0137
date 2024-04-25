/** @format */

// ProductFilter.js
import React from 'react';

const ProductFilter = ({ categories, companies, handleFilterChange }) => {
	return (
		<div className='flex flex-wrap items-center gap-4'>
			<select onChange={(e) => handleFilterChange('category', e.target.value)}>
				<option value=''>Select Category</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
			<select onChange={(e) => handleFilterChange('company', e.target.value)}>
				<option value=''>Select Company</option>
				{companies.map((company) => (
					<option key={company} value={company}>
						{company}
					</option>
				))}
			</select>
			{/* Add more filter options as needed */}
		</div>
	);
};

export default ProductFilter;
