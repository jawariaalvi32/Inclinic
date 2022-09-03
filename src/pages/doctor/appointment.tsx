import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

// Components
import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

const DoctorAppointment = () => {

    const Router = useRouter()
    const columns: Column[] = [
        { id: 'patientName', label: 'Doctor Name', minWidth: 170 },
        { id: 'doctorName', label: 'Patient Name', minWidth: 170 },
        { id: 'diagnosedComments', label: 'Diagnosed Comments', minWidth: 100 },
        { id: 'status', label: 'Status', minWidth: 170 },
        { id: 'feePaid', label: 'Fee Paid', minWidth: 170 },
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
        { id: 1, doctorName: 'John', patientName: 'John', diagnosedComments: 'Lorem Ipsum', status: 'pending', feePaid: '2000' },
        { id: 1, doctorName: 'John', patientName: 'John', diagnosedComments: 'Lorem Ipsum', status: 'pending', feePaid: '2000' },
        { id: 1, doctorName: 'John', patientName: 'John', diagnosedComments: 'Lorem Ipsum', status: 'pending', feePaid: '2000' },
        { id: 1, doctorName: 'John', patientName: 'John', diagnosedComments: 'Lorem Ipsum', status: 'pending', feePaid: '2000' },
    ])

    const [editId, setEditId] = useState<number>()
    const [delId, setDelId] = useState<number>()
    const [doctorList, setDoctorList] = useState(['DOctor1', 'DOctor2', 'Doctor3'])

    interface searchType {
        doctorName: string | null,
        appointmentDate: Date | null
    }
    const [searchedValue, setSearchValue] = useState<searchType>({
        doctorName: '',
        appointmentDate: new Date()
    })

    const showDrAppointments = () => {

    }

    // edit data
    useEffect(() => {
    }, [editId])

    useEffect(() => {
        // Del logic
    }, [delId])


    return (
        <Grid container>
            <Grid item xs={12}>
                <Card sx={{ mb: 4, pb: 4 }}>
                    <CardHeader title="Doctor Appointments" />
                    <Grid container spacing={2} sx={{ px: 4 }}>
                        <Grid item md={6} sm={12}>
                            <FormControl fullWidth>
                                <Autocomplete 
                                    id="doctor"
                                    options={doctorList}
                                    onChange={(e, value) => setSearchValue({ ...searchedValue, doctorName: value })}
                                    renderInput={(params) => <TextField {...params} label="Doctor"  />}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <FormControl fullWidth>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <MobileDatePicker
                                        label='For mobile'
                                        value={new Date()}
                                        onChange={newValue => console.log(newValue)}
                                        renderInput={params => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Grid>
                        <Grid item sm={12} sx={{ textAlign: 'right' }}>
                            <Button size='large' type='submit' variant='contained' className="gradientBtn" onClick={() => showDrAppointments()}>
                                View Detail
                            </Button>
                        </Grid>
                    </Grid>
                </Card>

                <Card>
                    <Listing rows={rows} columns={columns} />
                </Card>
            </Grid>
        </Grid>
    )
}

export default DoctorAppointment
