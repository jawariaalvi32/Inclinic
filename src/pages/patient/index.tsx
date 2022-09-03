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
import CreatePatient from './create'
import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'

const Patient = () => {

    const columns: Column[] = [
        { id: 'patientName', label: 'Patient Name', minWidth: 170 },
        { id: 'fatherName', label: 'Father Name', minWidth: 170 },
        { id: 'registerationDate', label: 'Registeration Date', minWidth: 100 },
        { id: 'cnic', label: 'CNIC', minWidth: 170 },
        { id: 'decease', label: 'Decease', minWidth: 170 },
        { id: 'address', label: 'Address', minWidth: 170 },
        { id: 'age', label: 'Age', minWidth: 50 },
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
        { id: 1, patientName: 'John', fatherName: 'John', registerationDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, decease: 'Neurologist' },
        { id: 2, patientName: 'John', fatherName: 'John', registerationDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, decease: 'Neurologist'  },
        { id: 3, patientName: 'John', fatherName: 'John', registerationDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, decease: 'Neurologist'  },
        { id: 4, patientName: 'John', fatherName: 'John', registerationDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, decease: 'Neurologist'  },
    ])

    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState<number>()
    const [delId, setDelId] = useState<number>()
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
        if (searchValue) {
            const filteredRows = rows.filter(row => {
                return row.patientName.toLowerCase().includes(searchValue.toLowerCase()) ||
                    row.registerationDate.toLowerCase().includes(searchValue.toLowerCase())
            })
            setRows(filteredRows)
        }
    }, [searchValue])

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='Patients'
                        action={
                            <Box>
                                <CreatePatient isOpen={open} openModal={setOpen} data={editId} />
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

export default Patient
