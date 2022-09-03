import { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// 3rd party imports
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'

// Components
import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'

const StaffRole = () => {

    const columns: Column[] = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'description', label: 'Description', minWidth: 170 },
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
        { id: 1, name: 'Admin', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { id: 2, name: 'Admin', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { id: 3, name: 'Admin', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { id: 4, name: 'Admin', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

    ])

    const [editId, setEditId] = useState(0)
    const [delId, setDelId] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const onEdit = () => {

    }

    const onDel = () => {

    }

    const onSave = () => {

        if (Object.keys(errors).length === 0) {

        }
    }

    // Searching
    useEffect(() => {
        if (searchValue) {
            const filteredRows = rows.filter(row => {
                return row.name.toLowerCase().includes(searchValue.toLowerCase())
            })
            setRows(filteredRows)
        }
    }, [searchValue])


    // Form Validations
    const schema = yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
    })

    const {
        control,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: "onChange",
        resolver: yupResolver(schema)
    })

    return (
        <Grid container>
            <Grid item xs={12} >
                <Card sx={{ mb: 4, py: 4 }}>
                    <CardHeader
                        title='Staff Roles'
                    />

                    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSave)}>
                        <Grid container spacing={2} sx={{ px: 4 }}>
                            <Grid item md={6} sm={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='name'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='Name'
                                                value={value}
                                                onChange={onChange}
                                                error={Boolean(errors.name)}
                                                placeholder='Name'
                                            />
                                        )}
                                    />
                                    {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='description'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='Description'
                                                value={value}
                                                onChange={onChange}
                                                error={Boolean(errors.description)}
                                                placeholder='Description'
                                            />
                                        )}
                                    />
                                    {errors.description && <FormHelperText sx={{ color: 'error.main' }}>{errors.description.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item sm={12} sx={{ textAlign: 'right' }}>
                                <Button size='large' type='submit' variant='contained' className="gradientBtn">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Card>

                <Card>

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

export default StaffRole
