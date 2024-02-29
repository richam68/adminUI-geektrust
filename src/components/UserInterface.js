import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import Pagination from "./Pagination";
import DeleteSelectedButton from "./DeleteSelectedButton";
import "../styles/UserInterface.css";
import axios from "axios";
import { toast } from "react-toastify";

let API_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function UserManagementInterface() {
  const [originalData, setOriginalData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectRows, setSelectRows] = useState([]);
  const [selectAllRow, setSelectAllRow] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const itemPerPage = 10;

  useEffect(() => {
    fetchApi();
  }, []);

  //Api fetch
  async function fetchApi() {
    try {
      const response = await axios.get(API_URL);
      setOriginalData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  //search bar function
  async function handleSearch(e) {
    let query = e.target.value.toLowerCase();
    setSearchQuery(query);

    let filterByQuery = originalData.filter(
      (data) =>
        data.id.toLowerCase().includes(query) ||
        data.name.toLowerCase().includes(query) ||
        data.email.toLowerCase().includes(query) ||
        data.role.toLowerCase().includes(query)
    );
    setFilterData(filterByQuery);
    setCurrentPage(1);
  }

  //pagination function
  function handlePagination(page) {
    setCurrentPage(page);
  }

  // Calculate the current page's of user
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentUsers = filterData.slice(startIndex, endIndex);

  function handleSelectRow(id) {
    if (selectRows.includes(id)) {
      setSelectRows(selectRows.filter((rowId) => rowId !== id));
    } else {
      setSelectRows([...selectRows, id]);
    }
  }

  const handleEditChange = (e) => {
    //console.log(e.target.value);
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault(e);

    let editedData = {
      id: isEdit,
      name: editFormData.name,
      email: editFormData.email,
      role: editFormData.role,
    };
    // console.log("editedData", editedData);
    const newData = [...originalData];
    const index = originalData.findIndex((user) => user.id === isEdit);
    newData[index] = editedData;

    setOriginalData(newData);
    setFilterData(newData);
    setIsEdit(null);
  };

  const handleEdit = (data) => {
    // console.log("id", data);
    setIsEdit(data.id);
    // console.log(isEdit);
    const formValue = { name: data.name, email: data.email, role: data.role };
    setEditFormData(formValue);
  };

  //delete checkboxes manually
  function handleDelete(id) {
    let newData = [...originalData];

    let index = originalData.findIndex((eleId) => eleId.id === id);
    newData.splice(index, 1);
    setOriginalData(newData);
    setFilterData(newData);

    toast.success("Deleted Successfully!");
  }

  //delete all selected
  function handleDeleteSelected() {
    let data = originalData.filter((row) => !selectRows.includes(row.id));

    setOriginalData(data);
    setFilterData(data);
    setSelectAllRow([]);
    toast.success("Deleted Successfully!", {
      position: "top-center",
    });
  }

  function selectAllCheckbox() {
    setSelectAllRow(!selectAllRow);
    setSelectRows(selectAllRow ? [] : currentUsers.map((row) => row.id));
  }

  return (
    <div className="container">
      <form className="formContainer" onSubmit={handleEditFormSubmit}>
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />

        <Table
          filterData={currentUsers}
          selectRows={selectRows}
          handleSelectRow={handleSelectRow}
          selectAllRow={selectAllRow}
          selectAllCheckbox={selectAllCheckbox}
          handleDelete={handleDelete}
          isEdit={isEdit}
          handleEdit={handleEdit}
          editFormData={editFormData}
          handleEditChange={handleEditChange}
        />

        <Pagination
          currentPage={currentPage}
          itemPerPage={itemPerPage}
          totalItemPerPage={filterData.length}
          handlePagination={handlePagination}
        />

        <DeleteSelectedButton handleDeleteSelected={handleDeleteSelected} />
      </form>
    </div>
  );
}

export default UserManagementInterface;
