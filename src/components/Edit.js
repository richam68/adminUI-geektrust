import React from "react";
import TextInput from "./TextInput";

function Edit({ editFormData, handleEditChange }) {
  // console.log("editFormData", editFormData.name)
  const inputField = [
    {
      name: "name",
      placeholder: "Enter name",
      type: "text",
    },
    {
      name: "email",
      placeholder: "Enter email",
      type: "text",
    },
    {
      name: "role",
      placeholder: "Enter role",
      type: "text",
    },
  ];
  return (
    <tr>
      <td></td>
      <td>{editFormData.id}</td>
      {inputField.map((field, index) => {
        return (
          <td key={index}>
            <TextInput
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={editFormData[field.name]}
              onChange={handleEditChange}
            />
          </td>
        );
      })}
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
}

export default Edit;
