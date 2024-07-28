import React from 'react'
import { useTable, Column, useSortBy } from "react-table";

type Props = {
    cols: string[],
    data: any[]
}

const Table = ({ cols, data }: Props) => {
    const columnsConfig = React.useMemo<Column<any>[]>(
        () =>
            cols.map((col) => ({
                Header: col,
                accessor: col,
                sortable: true,
            })),
        [cols]
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable<any>({ columns: columnsConfig, data }, useSortBy);

    return (
        <div className="w-full overflow-auto">
            <table className='table-auto text-[12px] w-full' {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className='bg-rose-800 text-white text-center'>
                            {headerGroup.headers.map((column: any) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className={` ${column.isSorted ?
                                    column.isSortedDesc ? 'sort-desc' : 'sort-asc' : ''} px-2`}>
                                    <>{column.Header === 'logo' ? '' : column.Header}</>

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row: any) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className='w-5 text-center even:bg-gray-50 odd:bg-gray-200'>
                                {row.cells.map((cell: any) => (
                                    <td  {...cell.getCellProps()} className='p-2 text-center'>
                                        <>{cell.column.Header === 'logo' ? <img className='h-8 w-8 float-right' src={cell.value} alt='logo' /> : cell.value}</>

                                    </td>

                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table