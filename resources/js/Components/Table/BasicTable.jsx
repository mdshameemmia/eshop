import React, { useMemo } from 'react'
import { useTable } from 'react-table';

const BasicTable = ({ data, columns }) => {
    
// prepared table header column 

const preparedColumns = [];
for(let column in columns){
    const singleColumnItem = {
        Header:columns[column],
        accessor:column
    }
    preparedColumns.push(singleColumnItem);
}

const allColumns = useMemo(() => preparedColumns, [])
const tableInstance = useTable({columns:allColumns, data:data});

const {getTableProps,getTableBodyProps,headerGroups,footerGroups,rows,prepareRow} = tableInstance;


  return (
    <table {...getTableProps()} className='table table-striped table-bordered'>
        <thead>
            {
                headerGroups.map((headerGroup, index)   => {
                    return (
                        <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((header, idx) => {
                                    return <th key={idx} {...header.getHeaderProps()}>{header.render('Header')}</th>
                                })
                            }
                        </tr>
                    )
                })
            }
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map((row, index) => {
                    prepareRow(row)
                    return <tr key={index} {...row.getRowProps()}>
                        {
                            row.cells.map((cell, index) => {
                                return <td key={index} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}

export default BasicTable