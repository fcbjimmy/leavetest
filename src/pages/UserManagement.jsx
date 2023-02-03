import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import useLocalState from "../utils/localState";
import { user_management } from "../utils/userAccessibility";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { GlobalFilter, AddUserModal, ModalWrapper } from "../components";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const { user, saveUser, toastNotification } = useGlobalContext();
  const { loading, setLoading } = useLocalState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/allusers");
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const usersData = useMemo(() => [...users], [users]);

  // const usersColumns = useMemo(()=>users[0] ? Object.keys(users[0]).filter((key)=> key !==))
  const usersColumns = useMemo(
    () => [
      {
        Header: "User Id",
        accessor: "UserId",
      },
      {
        Header: "User Role",
        accessor: "Role",
      },
      {
        Header: "Name",
        accessor: "Username",
      },
      {
        Header: "Email",
        accessor: "Email",
      },
      {
        Header: "Last Login",
        accessor: "LastLogin",
        Cell: ({ value }) =>
          new Date(value).toLocaleDateString("en-CA", { timeZone: "GMT" }),
      },
      {
        Header: "Create Date",
        accessor: "CreateDate",
        Cell: ({ value }) =>
          new Date(value).toLocaleDateString("en-CA", { timeZone: "GMT" }),
      },
    ],
    []
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <PencilSquareIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => alert(`Editing ${row.values.Role}`)}
          >
            Edit
          </PencilSquareIcon>
        ),
      },
    ]);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    { columns: usersColumns, data: usersData },
    useGlobalFilter,
    tableHooks,
    useSortBy,
    usePagination
  );
  const { pageIndex, pageSize } = state;

  const isEven = (index) => index % 2 === 0;

  return (
    <>
      <div>
        <div className="my-5 text-xl font-bold">User Management</div>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            className="w-full text-sm text-left text-gray-500 "
            {...getTableProps()}
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="px-4 py-3"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    className={
                      isEven(index)
                        ? "bg-gray-50 bg-opacity-30 border-b  hover:bg-blue-200"
                        : "bg-white border-b  hover:bg-blue-200"
                    }
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => (
                      <td className="px-4 py-1" {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center gap-1 py-2">
            <span>
              Page{" "}
              <strong>{`${pageIndex + 1} of ${pageOptions.length}`}</strong>
            </span>
            <span>
              | Go to page:{" "}
              <input
                className="w-16 rounded text-center"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  console.log(e.target.value);
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[5, 10, 30].map((pagesize) => (
                <option key={pagesize} value={pagesize}>
                  Show {pagesize}
                </option>
              ))}
            </select>
            <button
              className="button-pagination"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>

            <button
              className="button-pagination"
              type="button"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="button-pagination"
              type="button"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
            <button
              className="button-pagination"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
        <div className="my-6">
          <button className="button-click" onClick={handleShow}>
            Add New User
          </button>
        </div>
        <ModalWrapper title={"Add User"} show={show} handleClose={handleClose}>
          <AddUserModal handleClose={handleClose}/>
        </ModalWrapper>
      </div>
    </>
  );
}

export default UserManagement;
