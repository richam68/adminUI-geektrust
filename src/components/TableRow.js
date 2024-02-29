import React from "react";

function TableRow({
  item,
  selectRows,
  handleSelectRow,
  handleDelete,
  handleEdit,
}) {
  return (
    <tr className={selectRows.includes(item.id) ? "selectRow" : " "}>
      <td>
        <input
          type="checkbox"
          checked={selectRows.includes(item.id)}
          onChange={() => handleSelectRow(item.id)}
        />
      </td>

      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>

      <td className="button-container">
        <button type="button" onClick={() => handleEdit(item)}>
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={() => handleDelete(item.id)}>
          <i className="fas fa-trash" style={{ color: "red" }}></i>
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
