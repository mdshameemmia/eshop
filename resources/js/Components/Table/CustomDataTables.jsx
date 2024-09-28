import { Link, router } from "@inertiajs/react";
import React, { useMemo, useState } from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    usePagination,
} from "react-table";

const CustomDataTables = ({ data, columns, editAction, destroyAction }) => {

    const handleFormDestroy = (e, row) => {
        
        if(window.confirm("Are you want to destroy?")){
            router.delete(`${destroyAction}/${row.original.id}`)
        }
    }

    /*##############################  prepared table header column #########################*/
    const preparedColumns = [];
    for (let column in columns) {
        let singleColumnItem;
        if (column === "action") {
            singleColumnItem = {
                Header: columns[column],
                accessor: column,
                Cell: ({ row }) => {
                    return (
                        <div className="d-flex">
                            <Link href={route(editAction, row.original.id)}>
                                <button className="btn btn-primary btn-sm mx-1">
                                    <i className="fa fa-pen text-white"></i>{" "}
                                </button>
                            </Link>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={(e) => handleFormDestroy(e,row)}
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    );
                },
            };
        } else if(column === "img"){
            singleColumnItem = {
                Header: columns[column],
                accessor: column,
                Cell: ({ row }) => {
                    console.log(row)
                    return (<img src={"http://localhost:8000/storage/" + row.original.img} alt="" height={80} width={120} /> );
                },
            };
        } else {
            singleColumnItem = {
                Header: columns[column],
                accessor: column,
            };
        }

        preparedColumns.push(singleColumnItem);
    }
   /*############################## end prepared table header column #########################*/


    const allColumns = useMemo(() => preparedColumns, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable(
        { columns: allColumns, data: data },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex, pageSize } = state;

    const [value, setValue] = useState(globalFilter);
    const onChange = (value) => {
        setGlobalFilter(value || undefined);
    };

    return (
        <>
            <div className="mx-1 row mb-2 d-flex justify-content-between">
                <select
                    className="col-1  px-2"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10, 50, 100].map((pageSize) => {
                        return (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        );
                    })}
                </select>
                <div className="col-lg-3">
                    <input
                        type="text"
                        value={value || ""}
                        onChange={(e) => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                        className="form-control"
                        placeholder="Search here..."
                    />
                </div>
            </div>

            <table
                {...getTableProps()}
                className="table table-striped table-bordered"
            >
                <thead>
                    {headerGroups.map((headerGroup, index) => {
                        return (
                            <tr
                                key={Date.now()}
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column) => {
                                    return (
                                        <th
                                            key={Date.now()}
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}
                                        >
                                            {column.render("Header")}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? "🔽"
                                                        : "🔼"
                                                    : ""}
                                            </span>
                                        </th>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr key={row.id} {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    return (
                                        <td
                                            key={`${cell.row.id}-${cell.column.id}`}
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="text-center">
                <span className="mx-1">
                    Page {pageIndex + 1} of {pageOptions.length}
                </span>
                <button
                    className="btn btn-white"
                    onClick={(e) => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    {"<<"}
                </button>
                <button
                    className="btn btn-white"
                    onClick={(e) => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Previous
                </button>
                <button
                    className="btn btn-white"
                    onClick={(e) => nextPage()}
                    disabled={!canNextPage}
                >
                    Next
                </button>
                <button
                    className="btn btn-white"
                    onClick={(e) => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {">>"}
                </button>
            </div>
        </>
    );
};

export default CustomDataTables;
