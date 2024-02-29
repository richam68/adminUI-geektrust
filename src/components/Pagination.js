import React from "react";
// import "@fortawesome/fontawesome-free/css/all.css";

function Pagination({
  currentPage,
  itemPerPage,
  totalItemPerPage,
  handlePagination,
}) {
  const totalPages = Math.ceil(totalItemPerPage / itemPerPage);

  const updatePaginationButtons = () => {
    let collectionOfPage = [];

    collectionOfPage.push(
      <button
        key="first"
        onClick={() => handlePagination(1)}
        className={currentPage === 1 ? "active" : ""}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
    );

    collectionOfPage.push(
      <button
        key="previous"
        onClick={() => handlePagination(currentPage - 1)}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    );

    for (let page = 1; page <= totalPages; page++) {
      collectionOfPage.push(
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      );
    }

    collectionOfPage.push(
      <button
        key="next"
        onClick={() => handlePagination(currentPage + 1)}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    );

    collectionOfPage.push(
      <button
        key="last"
        onClick={() => handlePagination(totalPages)}
        className={currentPage === totalPages ? "active" : ""}
      >
        {" "}
        <i className="fas fa-angle-double-right"></i>
      </button>
    );

    return collectionOfPage;
  };

  return <div className="pagination">{updatePaginationButtons()}</div>;
}

export default Pagination;
