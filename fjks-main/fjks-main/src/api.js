/** @format */

// api.js
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test'; // Base URL of the Test Server API

// Function to fetch products based on filters and pagination
export const getProducts = async (filters, page) => {
	try {
		const response = await axios.get(
			`${BASE_URL}/companies/${filters.company}/categories/${filters.category}/products`,
			{
				params: {
					top: 10, // Assuming you want to fetch top 10 products
					minPrice: 0, // Adjust as needed
					maxPrice: 100000, // Adjust as needed
					page, // Pagination page number
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

// Function to fetch a product by ID
export const getProductById = async (productId) => {
	try {
		const response = await axios.get(`${BASE_URL}/products/${productId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};
