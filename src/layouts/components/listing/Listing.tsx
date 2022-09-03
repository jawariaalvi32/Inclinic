import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export interface Column {
    id: string
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
    action?: {
        type: string,
        detail?: {
            icon?: string,
            onClick: (id ?: number | undefined) => void,
            text?: string,
            className?: string
        }[]
    }
}

interface ListingParams {
    columns: Column[];
    rows: any[]
}   

export default function Listing({ rows, columns }: ListingParams) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'action') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <div>
                                                            <Button
                                                                id="fade-button"
                                                                aria-controls={open ? 'fade-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                                onClick={handleClick}
                                                                className="btn-light"
                                                            >
                                                                Actions
                                                            </Button>
                                                            <Menu
                                                                id="fade-menu"
                                                                MenuListProps={{
                                                                    'aria-labelledby': 'fade-button',
                                                                }}
                                                                anchorEl={anchorEl}
                                                                open={open}
                                                                onClose={handleClose}
                                                                TransitionComponent={Fade}
                                                            >
                                                                {
                                                                    column.action?.detail?.map((action, index) => {
                                                                        console.log(row)
                                                                        return <MenuItem key={index} onClick={() => action.onClick(row.id)}>{action.text}</MenuItem>
                                                                    })
                                                                }
                                                            </Menu>
                                                        </div>
                                                    </TableCell>
                                                )
                                            } else {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                )
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
