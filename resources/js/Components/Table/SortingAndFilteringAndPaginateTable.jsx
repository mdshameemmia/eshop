import React, { useMemo, useState } from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    usePagination
} from "react-table";

const SortingAndFilteringAndPaginateTable = ({ data, columns }) => {
    // prepared table header column

    const preparedColumns = [];
    for (let column in columns) {
        const singleColumnItem = {
            Header: columns[column],
            accessor: column,
        };
        preparedColumns.push(singleColumnItem);
    }

    const allColumns = useMemo(() => preparedColumns, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable(
        { columns: allColumns, data: data },
        useGlobalFilter,
        useSortBy, 
        usePagination
    );

    const { globalFilter, pageIndex } = state;

    const [value, setValue] = useState(globalFilter);
    const onChange = (value) => {
        setGlobalFilter(value || undefined);
    };

    return (
        <>
            <div className="row col-3 offset-3 mb-2">
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
            <div>
                <span className="mx-1">Page {pageIndex+1} of {pageOptions.length}</span>
                <button className="btn btn-white" onClick={(e)=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className="btn btn-white" onClick={(e)=> previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button className="btn btn-white" onClick={(e)=> nextPage()} disabled={!canNextPage}>Next</button>
                <button className="btn btn-white" onClick={(e)=> gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
    );
};

export default SortingAndFilteringAndPaginateTable;
