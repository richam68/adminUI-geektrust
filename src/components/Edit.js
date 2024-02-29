import React from "react";

function EditModal({ editFormData, handleEditChange }) {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          placeholder="Enter name"
          required
          name="name"
          value={editFormData.name}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          required
          name="email"
          value={editFormData.email}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          required
          name="role"
          value={editFormData.role}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
}

export default EditModal;
