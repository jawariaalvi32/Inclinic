import { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import CreateUser from './create'

// Components
import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'

const Role = () => {

    const columns: Column[] = [
        { id: 'userName', label: 'Username', minWidth: 170 },
        { id: 'staff', label: 'Staff', minWidth: 170 },
        { id: 'role', label: 'Role', minWidth: 170 },
        {
            id: 'action', label: '', minWidth: 100, align: 'right', action: {
                type: 'drop',
                detail: [
                    { onClick: (id) => setEditId(id), text: 'Edit' },
                    { onClick: (id) => setDelId(id), text: 'Delete' }
                ]
            }
        },
    ];

    const [rows, setRows] = useState([
        { id: 1, userName: 'Admin', role: 'Admin', staff: 'John' },
        { id: 2, userName: 'Admin', role: 'Admin', staff: 'John' },
        { id: 3, userName: 'Admin', role: 'Admin', staff: 'John' },
        { id: 4, userName: 'Admin', role: 'Admin', staff: 'John' },
    ])

    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState<number>()
    const [delId, setDelId] = useState<number>()

    // edit data
    useEffect(() => {
        editId && setOpen(true)
    }, [editId])

    useEffect(() => {
        // Del logic
    }, [delId])

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='Users'
                        action={
                            <Box>
                                <CreateUser isOpen={open} openModal={setOpen} data={1} />
                            </Box>
                        }
                    />

                    <Listing rows={rows} columns={columns} />
                </Card>
            </Grid>
        </Grid>
    )
}

export default Role
