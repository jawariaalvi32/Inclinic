import { useState, useEffect } from 'react'

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
import { Column } from '../../types/ComponentTypes'
import CreateDoctor from './create'
import DataTable from 'src/layouts/components/listing/DataTable'

const Doctor = () => {

    const [data, setData] = useState([
        { id: 1, doctorName: 'John', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, speciality: 'Neurologist' },
        { id: 2, doctorName: 'John1', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, speciality: 'Neurologist' },
        { id: 3, doctorName: 'John2', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, speciality: 'Neurologist' },
        { id: 4, doctorName: 'John3', fatherName: 'John', joiningDate: '08-30-2022', cnic: '4210159637822', address: 'Karachi', age: 23, speciality: 'Neurologist' },
    ]);

    const columns: Column[] = [
        {
            Header: "Doctor Name",
            accessor: "doctorName",
        },
        {
            Header: "Joining Date",
            accessor: "joiningDate",
        },
        {
            Header: "CNIC",
            accessor: "cnic",
        },
        {
            Header: "Address",
            accessor: "address",
        },
        {
            Header: "Speciality",
            accessor: "speciality",
        },
        // {
        //     Header: "actions",
        //     accessor: "action",
        //     Cell: (cell: any) => (
        //         <Button onClick={() =>  console.log(cell.cell.row.original.id)}>Add</Button>
        //     )
        // },
    ];

    const [isCreate, setIsCreate] = useState<Boolean>()
    const [editId, setEditId] = useState<number>()
    const [delId, setDelId] = useState<number>()
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        // Del logic
    }, [delId])

    // Searching
    useEffect(() => {
        if (searchValue) {
            const filteredRows = data.filter(row => {
                return row.doctorName.toLowerCase().includes(searchValue.toLowerCase()) ||
                    row.joiningDate.toLowerCase().includes(searchValue.toLowerCase())
            })
            setData(filteredRows)
        }
    }, [searchValue])

    // Conditional Rendering
    if (editId || isCreate) { 
        return <CreateDoctor data={editId} /> 
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title='Doctor'
                            action={
                                <Box>
                                    <Button size='small' type='submit' variant='contained' className="gradientBtn"
                                        onClick={() => setIsCreate(true)}>
                                        Add Doctor
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

                        <DataTable rowsData={data} columns={columns}
                            canEdit={true} canDel={true}
                            handleEdit={(id: number) => setEditId(id)}
                            handleDel={(id: number) => setDelId(id)}
                        />
                    </Card>
                </Grid>
            </Grid>
        </>

    )
}

export default Doctor
