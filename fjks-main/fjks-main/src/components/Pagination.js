/** @format */

// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
	return (
		<div className='flex justify-center space-x-4'>
			<button
				onClick={() => handlePageChange('prev')}
				disabled={currentPage === 1}
				className='bg-blue-500 text-white px-4 py-2 rounded'>
				Prev
			</button>
			<p>
				Page {currentPage} of {totalPages}
			</p>
			<button
				onClick={() => handlePageChange('next')}
				disabled={currentPage === totalPages}
				className='bg-blue-500 text-white px-4 py-2 rounded'>
				Next
			</button>
		</div>
	);
};

export default Pagination;
