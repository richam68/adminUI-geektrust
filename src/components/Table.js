import React, { Fragment } from "react";
import TableRow from "./TableRow";
import Edit from "./Edit";

function Table({
  filterData,
  selectRows,
  handleSelectRow,
  handleDelete,
  selectAllRow,
  selectAllCheckbox,

  isEdit,
  handleEdit,
  editFormData,
  handleEditChange,
}) {
  // console.log(originalData.originalData);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              className="checkbox-input"
              value={selectAllRow}
              onChange={selectAllCheckbox}
            />
          </th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filterData.length &&
          filterData.map((item) => (
            <Fragment key={item.id}>
              {isEdit === item.id ? (
                <Edit
                editFormData={editFormData}
                handleEditChange={handleEditChange}
                />
              ) : (
                <TableRow
                  key={item.id}
                  item={item}
                  selectRows={selectRows}
                  handleSelectRow={handleSelectRow}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              )}
            </Fragment>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
