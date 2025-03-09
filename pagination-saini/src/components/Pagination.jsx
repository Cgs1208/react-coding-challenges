import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
  handleNextPAge,
  handlePrevPage,
}) => {
  return (
    <div className="page-container">
      <button
        disabled={currentPage === 0}
        className="page-num"
        onClick={handlePrevPage}
      >
        ⏮️
      </button>
      {[...Array(totalPages).keys()].map((n) => (
        <button
          className={"page-num" + (currentPage === n ? "active" : "")}
          key={n}
          onClick={() => handlePageChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages - 1}
        className="page-num"
        onClick={handleNextPAge}
      >
        ⏭️
      </button>
    </div>
  );
};

export default Pagination;
