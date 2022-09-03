import { useTable } from 'react-table'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Column, Rows } from '../../../types/ComponentTypes'

interface DataTableProps {
    columns: Column[];
    rowsData: Rows,
    canEdit: Boolean,
    canDel: Boolean,
    handleEdit: (id: number) => void,
    handleDel: (id: number) => void
}

export default function DataTable({ rowsData, columns, ...props }: DataTableProps) {

    // Listing Actions
    const tableHooks = (hooks: any) => {
        hooks.visibleColumns.push((column: any) => [
            ...column,
            {
                id: "Edit",
                Header: "Edit",
                Cell: ({ row }: { row: any }) => (
                    <div key={row.original.id}>
                        {
                            props.canEdit && <Button onClick={() => props.handleEdit(row.original.id)} className="btn-light" sx={{ mr: 2 }}>
                                Edit
                            </Button>
                        }

                        {
                            props.canDel && <Button onClick={() => props.handleDel(row.original.id)} className="btn-light">
                                Del
                            </Button>
                        }
                    </div>

                ),
            },
        ]);
    };

    const tableInstance = useTable(
        {
            columns: columns,
            data: rowsData,
        },
        tableHooks,
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table {...getTableProps()} stickyHeader aria-label="sticky table">
                    <TableHead>
                        {headerGroups.map((headerGroup: any) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column: any) => (
                                    <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row: any) => {
                            prepareRow(row)
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {row.cells.map((cell: any) => {
                                        return (
                                            <>
                                                <TableCell {...cell.getCellProps()}>{cell.render('Cell')} </TableCell>
                                            </>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}