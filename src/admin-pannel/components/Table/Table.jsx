import { useState, useEffect } from "react";
import FilterPannel from "./FilterPannel";

const Table = ({
  tableColumns = [],
  tableData = [],
  showDetailButton = true,
  detailClicked,
  editClicked,
  deleteClicked,
  confirmationService,
  messageService,
  itemsPerPage = 10,
  newClicked,
}) => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedRows, setCheckedRows] = useState([]);
  const isAnyCheckboxChecked = checkedRows.length > 0;

  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  const onSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = tableData.filter((row) =>
      tableColumns.some((col) =>
        String(row[col.tr]).toLowerCase().includes(query)
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const confirm = (event, rowData) => {
    if (rowData.membersCount > 0) {
      messageService.add({
        severity: "error",
        summary: "ERROR",
        detail: "Cannot delete project with members",
      });
      return;
    }
    confirmationService.confirm({
      target: event.target,
      message: "Are you sure you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      accept: () => {
        messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "Record deleted",
        });
        deleteClicked(rowData.id);
        confirmationService.close();
      },
      reject: () => {
        messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "Delete rejected",
        });
        confirmationService.close();
      },
    });
  };

  const handleCheckboxChange = (event, rowId) => {
    if (event.target.checked) {
      setCheckedRows((prev) => [...prev, rowId]);
    } else {
      setCheckedRows((prev) => prev.filter((id) => id !== rowId));
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="row gx-3">
      <div className="col-xxl-10 col-xl-9">
        <div className="card" id="ticketsTable">
          <div className="card-header border-bottom border-200 px-0">
            <div className="d-lg-flex justify-content-between">
              <div className="row flex-between-center gy-2 px-x1">
                <div className="col-auto">
                  <h6 className="mb-0">All records</h6>
                </div>
                <div className="col-auto">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Search..."
                    onChange={onSearch}
                  />
                </div>
              </div>
              <div className="border-bottom border-200 my-3"></div>
              <div className="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
                <button
                  className="btn btn-sm btn-falcon-default d-xl-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#ticketOffcanvas"
                  aria-controls="ticketOffcanvas"
                >
                  <span
                    className="fas fa-filter"
                    data-fa-transform="shrink-4 down-1"
                  ></span>
                  <span className="ms-1 d-none d-sm-inline-block">Filter</span>
                </button>
                <div
                  className="bg-300 mx-3 d-none d-lg-block d-xl-none"
                  style={{ width: "1px", height: "29px" }}
                ></div>
                {isAnyCheckboxChecked ? (
                  <div className="d-flex" id="table-ticket-actions">
                    <div className="d-flex">
                      <select
                        className="form-select form-select-sm"
                        aria-label="Bulk actions"
                      >
                        <option>Bulk actions</option>
                        <option value="Refund">Refund</option>
                        <option value="Delete">Delete</option>
                        <option value="Archive">Archive</option>
                      </select>
                      <button
                        className="btn btn-falcon-default btn-sm ms-2"
                        type="button"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="d-flex align-items-center"
                    id="table-ticket-replace-element"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-falcon-default dropdown-toggle dropdown-caret-none"
                        type="button"
                        id="ticket-layout"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block me-1">
                          Table View
                        </span>
                        <span
                          className="fas fa-chevron-down"
                          data-fa-transform="shrink-3 down-1"
                        ></span>
                      </button>
                      <div
                        className="dropdown-menu dropdown-toggle-item dropdown-menu-end border py-2"
                        aria-labelledby="ticket-layout"
                      >
                        <a
                          className="dropdown-item active"
                          href="table-view.html"
                        >
                          Table View
                        </a>
                        <a className="dropdown-item" href="card-view.html">
                          Card View
                        </a>
                      </div>
                    </div>
                    <button
                      className="btn btn-falcon-default btn-sm mx-2"
                      type="button"
                      onClick={newClicked}
                    >
                      <span
                        className="fas fa-plus"
                        data-fa-transform="shrink-3"
                      ></span>
                      <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">
                        New
                      </span>
                    </button>
                    <button
                      className="btn btn-falcon-default btn-sm"
                      type="button"
                    >
                      <span
                        className="fas fa-external-link-alt"
                        data-fa-transform="shrink-3"
                      ></span>
                      <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">
                        Export
                      </span>
                    </button>
                    <div className="dropdown font-sans-serif ms-2">
                      <button
                        className="btn btn-falcon-default text-600 btn-sm dropdown-toggle dropdown-caret-none"
                        type="button"
                        id="preview-dropdown"
                        data-bs-toggle="dropdown"
                        data-boundary="viewport"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="fas fa-ellipsis-h fs-11"></span>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end border py-2"
                        aria-labelledby="preview-dropdown"
                      >
                        <a className="dropdown-item" href="#!">
                          View
                        </a>
                        <a className="dropdown-item" href="#!">
                          Export
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="#!">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive scrollbar">
              <table className="table table-sm mb-0 fs-10 table-tickets">
                <thead className="bg-body-tertiary">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    {tableColumns.map((col, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="text-800 sort align-middle"
                      >
                        {col.tableHeader}
                      </th>
                    ))}
                    <th className="text-800 sort align-middle">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((rowData, i) => (
                    <tr key={i}>
                      <td className="align-middle fs-9 py-3">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`table-view-tickerowDatats-${rowData.id}`}
                            data-bulk-select-row="data-bulk-select-row"
                            checked={checkedRows.includes(rowData.id)}
                            onChange={(e) =>
                              handleCheckboxChange(e, rowData.id)
                            }
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        {indexOfFirstItem + i + 1}
                      </td>
                      {tableColumns.map((col, index) => (
                        <td key={index} className="align-middle">
                          {rowData[col.tr]}
                        </td>
                      ))}
                      <td className="align-middle">
                        {showDetailButton && (
                          <button
                            className="btn btn-sm btn-falcon-default me-1"
                            onClick={() => {
                              detailClicked(rowData.id);
                            }}
                          >
                            Details
                          </button>
                        )}
                        <button
                          className="btn btn-sm btn-falcon-primary me-1"
                          onClick={() => editClicked(rowData)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-falcon-danger"
                          onClick={(event) => confirm(event, rowData)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center d-none" id="tickets-table-fallback">
                <p className="fw-bold fs-8 mt-3">No result found</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-sm btn-falcon-default me-1"
                type="button"
                title="Previous"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <span className="fas fa-chevron-left"></span>
              </button>
              <ul className="pagination mb-0">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}
              </ul>
              <button
                className="btn btn-sm btn-falcon-default ms-1"
                type="button"
                title="Next"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FilterPannel />
    </div>
  );
};

export default Table;
