import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button';

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'

// Components
import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'

const Staff = () => {

    const Router = useRouter()
    const columns: Column[] = [
        { id: 'staffName', label: 'Staff Name', minWidth: 170 },
        { id: 'fatherName', label: 'Father Name', minWidth: 170 },
        { id: 'joiningDate', label: 'Joining Date', minWidth: 170 },
        { id: 'cnic', label: 'CNIC', minWidth: 170 },
        { id: 'address', label: 'Address', minWidth: 170 },
        { id: 'age', label: 'Age', minWidth: 170 },
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
        { id: 1, staffName: 'John', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23 },
        { id: 2, staffName: 'John', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23 },
        { id: 3, staffName: 'John', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23 },
        { id: 4, staffName: 'John', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23 },
    ])

    const [editId, setEditId] = useState<number>()
    const [delId, setDelId] = useState<number>()
    const [searchValue, setSearchValue] = useState('')

    // edit data
    useEffect(() => {
    }, [editId])

    useEffect(() => {
        // Del logic
    }, [delId])

    // Searching
    useEffect(() => {
        if (searchValue) {
            const filteredRows = rows.filter(row => {
                return row.staffName.toLowerCase().includes(searchValue.toLowerCase()) ||
                    row.joiningDate.toLowerCase().includes(searchValue.toLowerCase())
            })
            setRows(filteredRows)
        }
    }, [searchValue])

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='Staff'
                        action={
                            <Box>
                                <Button size='small' type='submit' variant='contained' className="gradientBtn"
                                    onClick={() => Router.push('staff/create')}>
                                    Add Staff
                                </Button>
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

export default Staff
