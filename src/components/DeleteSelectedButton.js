import React from "react";

function DeleteSelectedButton({ handleDeleteSelected }) {
  return <button className="delete-button" onClick={handleDeleteSelected}>Delete Selected</button>;
}

export default DeleteSelectedButton;
