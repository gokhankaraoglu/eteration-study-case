interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span
            key={i}
            className={`text-sm mx-1 px-3 py-2 rounded-md cursor-pointer ${
              i === currentPage
                ? "bg-white shadow-md text-base-color"
                : "text-gray-500"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        );
      }
    } else {
      pageNumbers.push(
        <span
          key={1}
          className={`text-sm mx-1 px-3 py-2 rounded-md cursor-pointer ${
            1 === currentPage
              ? "bg-white shadow-md text-base-color"
              : "text-gray-500"
          }`}
          onClick={() => handlePageChange(1)}
        >
          1
        </span>
      );

      if (currentPage > 3) {
        pageNumbers.push(
          <span key="dots1" className="mx-1 text-gray-500">
            ...
          </span>
        );
      }

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pageNumbers.push(
          <span
            key={i}
            className={`mx-1 px-3 py-2 rounded-md cursor-pointer ${
              i === currentPage
                ? "bg-white shadow-md text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(
          <span key="dots2" className="mx-1 text-gray-500">
            ...
          </span>
        );
      }

      pageNumbers.push(
        <span
          key={totalPages}
          className={`mx-1 px-3 py-2 rounded-md cursor-pointer ${
            totalPages === currentPage
              ? "bg-white shadow-md text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-4">
      <span
        className={`mx-2 px-3 py-2 rounded-md ${
          currentPage === 1 ? "text-gray-300" : "text-gray-500 cursor-pointer"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </span>
      {renderPageNumbers()}
      <span
        className={`mx-2 px-3 py-2 rounded-md ${
          currentPage === totalPages
            ? "text-gray-300 disabled"
            : "text-gray-500 cursor-pointer"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &gt;
      </span>
    </div>
  );
}

export default Pagination;
