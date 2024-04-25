/** @format */

// AllProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import Pagination from '../components/Pagination';
import { getProducts } from '../api'; // Assuming you have an API function to fetch products

const AllProductsPage = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [companies, setCompanies] = useState([]);
	const [filters, setFilters] = useState({
		category: '',
		company: '',
		// Add more filters as needed
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		// Fetch initial data when component mounts
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			// Fetch products based on filters and pagination
			const { data } = await getProducts(filters, currentPage);
			setProducts(data.products);
			setTotalPages(data.totalPages);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	const handleFilterChange = (filterType, value) => {
		setFilters({ ...filters, [filterType]: value });
		setCurrentPage(1); // Reset pagination when filters change
	};

	const handlePageChange = (type) => {
		setCurrentPage((prevPage) =>
			type === 'next' ? prevPage + 1 : prevPage - 1
		);
	};

	return (
		<div>
			<h1 className='text-2xl font-semibold mb-4'>All Products</h1>
			<ProductFilter
				categories={categories}
				companies={companies}
				handleFilterChange={handleFilterChange}
			/>
			<ProductList products={products} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handlePageChange={handlePageChange}
			/>
		</div>
	);
};

export default AllProductsPage;
