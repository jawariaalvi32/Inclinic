import { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'

// Components
import CreatePermission from './create'
import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'

const Permission = () => {

    const columns: Column[] = [
        { id: 'permissionName', label: 'Permission Name', minWidth: 170 },
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
        { id: 1, permissionName: 'Admin' },
        { id: 1, permissionName: 'Staff' },
        { id: 1, permissionName: 'Role' },
        { id: 1, permissionName: 'Doctor' },

    ])

    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState<number | undefined>()
    const [delId, setDelId] = useState<number | undefined>()
    const [searchValue, setSearchValue] = useState('')

    // edit data
    useEffect(() => {
        editId && setOpen(true)
    }, [editId])

    useEffect(() => {
        // Del logic
    }, [delId])


    // Searching
    useEffect(() => {
        if(searchValue) {
            const filteredRows = rows.filter(row => {
                return row.permissionName.toLowerCase().includes(searchValue.toLowerCase())
            })
            setRows(filteredRows)
        }
    }, [searchValue])

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='User Permissions'
                        action={
                            <Box>
                                <CreatePermission isOpen={open} openModal={setOpen} data={editId} />
                            </Box>
                        }
                    />
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <TextField
                            variant='standard'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder='Search…'
                            InputProps={{
                                startAdornment: <Magnify fontSize='small' />,
                                endAdornment: (
                                    <IconButton size='small' title='Clear' aria-label='Clear' 
                                    onClick={() => setSearchValue('')}
                                    >
                                        <Close fontSize='small' />
                                    </IconButton>
                                )
                            }}
                        />
                    </Box>
                    <Listing rows={rows} columns={columns} />
                </Card>
            </Grid>
        </Grid>
    )
}

export default Permission
