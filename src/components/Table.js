import React, { Fragment } from "react";
import TableRow from "./TableRow";
import Edit from "./Edit";
import TableHead from "./TableHead";

function Table({
  filterData,
  selectRows,
  handleSelectRow,
  handleDelete,
  selectAllRow,
  handleSelectAllCheckbox,

  isEdit,
  handleEdit,
  editFormData,
  handleEditChange,
}) {
  return (
    <table className="table">
    <TableHead selectAllRow={selectAllRow} handleSelectAllCheckbox={handleSelectAllCheckbox}/>
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
