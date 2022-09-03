import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import CreateRole from './create'

import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'

const Role = () => {

    const columns: Column[] = [
        { id: 'role', label: 'Role Name', minWidth: 170 },
        {
            id: 'action', label: '', minWidth: 100, align: 'right', action: {
                type: 'drop',
                detail: [
                    { onClick: () => onEdit(), text: 'Edit' },
                    { onClick: () => onDel(), text: 'Delete' }
                ]
            }
        },
    ];

    const [rows, setRows] = useState([
        { id: 1, role: 'Admin' },
        { id: 2, role: 'Doctor' },
        { id: 3, role: 'Patient' },
        { id: 4, role: 'Staff' },

    ])

    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState('')
    const [delId, setDelId] = useState('')

    const onEdit = () => {
        setOpen(true)
    }

    const onDel = () => {

    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='User Roles'
                        action={
                            <Box>
                                <CreateRole isOpen={open} openModal={setOpen} data={1}/>
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
