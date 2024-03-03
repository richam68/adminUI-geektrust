import React from "react";

export const TableHead = ({ selectAllRow, handleSelectAllCheckbox }) => {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            className="checkbox-input"
            value={selectAllRow}
            onChange={handleSelectAllCheckbox}
          />
        </th>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};
export default TableHead;
