import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, loading }) => {
  const maxVisiblePages = 5;
  const [jumpPage, setJumpPage] = useState('');

  const createButton = (page) => (
    <button
      key={page}
      onClick={() => onPageChange(page)}
      disabled={loading || page === currentPage}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105
        ${page === currentPage
          ? 'bg-indigo-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-800 hover:bg-indigo-100'
        }
        ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {page}
    </button>
  );

  const renderPages = () => {
    const pages = [];

    pages.push(createButton(1));

    if (currentPage > maxVisiblePages) {
      pages.push(<span key="start-dots" className="px-3 py-2 text-gray-600">...</span>);
    }

    let start = Math.max(2, currentPage - 2);
    let end = Math.min(totalPages - 1, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(createButton(i));
    }

    if (currentPage < totalPages - maxVisiblePages + 1) {
      pages.push(<span key="end-dots" className="px-3 py-2 text-gray-600">...</span>);
    }

    if (totalPages > 1) {
      pages.push(createButton(totalPages));
    }

    return pages;
  };

  const handleJumpPage = (e) => {
    e.preventDefault();
    const page = parseInt(jumpPage);
    if (page && page >= 1 && page <= totalPages && !loading) {
      onPageChange(page);
      setJumpPage('');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-6">
      <nav className="inline-flex items-center space-x-2 rounded-lg bg-white p-2 shadow-md" aria-label="Pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${currentPage === 1 || loading
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md'
            }`}
        >
          <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <div className="flex items-center space-x-2">{renderPages()}</div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${currentPage === totalPages || loading
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md'
            }`}
        >
          Next
          <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>

      {/* Jump to Page Input */}
      <form onSubmit={handleJumpPage} className="flex items-center gap-2">
        <input
          type="number"
          value={jumpPage}
          onChange={(e) => setJumpPage(e.target.value)}
          placeholder="Go to page"
          min="1"
          max={totalPages}
          className="w-24 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${loading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default Pagination;