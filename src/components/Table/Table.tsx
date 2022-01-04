import { usePagination, useTable } from "react-table";

const buttonStyle = "bg-neutral-200 py-1 px-4 mr-1 rounded";

function Table({ columns, data }) {
    // State and functions for the useTable hook
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable(
        {
         columns,
         data,
         initialState: { pageIndex: 0 }
        },
        usePagination
    );

    // Render table UI
    // TODO make the table responsive when scaling to really small display size
    return (
        <div>
            <div className="overflow-auto min-w-full border-gray-200 border-2">
                { /* Table */ }
                <table {...getTableProps()} className="w-screen md:w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        scope="col"
                                        className="px-2 text-left text-s font-medium font-gray-500"
                                        {...column.getHeaderProps()}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        {...getTableBodyProps()}
                        className="bg-white divide-y divide-gray-200"
                    >
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                className="px-2 md:py-1 whitespace-nowrap"
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            { /* Pagination */ }
                <div className="pagination py-2 px-2 border-t-2">
                    <button
                        className={buttonStyle}
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {'<<'}
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        {'<'}
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        {'>'}
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {'>>'}
                    </button>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1}
                        </strong>
                        {' ' } of {' '}
                        <strong>
                            {pageOptions.length}
                        </strong>
                    </span>
                </div>
        </div>
    )
}

export default Table;