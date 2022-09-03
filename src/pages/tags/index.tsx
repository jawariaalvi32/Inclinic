import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

// 3rd party imports
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Icons Imports
import Filter from 'mdi-material-ui/Filter'

// Components
import Listing from '../../layouts/components/listing/Listing'
import { Column } from '../../layouts/components/listing/Listing'

const Tags = () => {

    const columns: Column[] = [
        { id: 'tagType', label: 'Tag Type', minWidth: 170 },
        { id: 'tagName', label: 'Tag Name', minWidth: 170 },
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
        { id: 1, tagType: 'Tag1', tagName: 'Admin' },
        { id: 2, tagType: 'Tag1', tagName: 'Admin' },
        { id: 3, tagType: 'Tag2', tagName: 'Admin' },
        { id: 4, tagType: 'Tag2', tagName: 'Admin' }
    ])

    const [editId, setEditId] = useState(0)
    const [delId, setDelId] = useState('')

    const [tagType, setTagType] = useState(['Tag1', 'Tag2'])

    const onEdit = () => {

    }

    const onDel = () => {

    }

    const onSave = () => {

        if (Object.keys(errors).length === 0) {

        }
    }

    const filterTags = (value: string) => {
        const filteredRows = rows.filter(row => {
            return row.tagType.toLowerCase().includes(value.toLowerCase())
        })
        setRows(filteredRows)
    }

    // Filter drop down
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Form Validations
    const schema = yup.object().shape({
        tagName: yup.string().required(),
        tagType: yup.string().required(),
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
                        title='Tags'
                    />
                    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSave)}>
                        <Grid container spacing={2} sx={{ px: 4 }}>
                            <Grid item md={6} sm={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='tagName'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='Tag Name'
                                                value={value}
                                                onChange={onChange}
                                                error={Boolean(errors.tagName)}
                                                placeholder='Tag Name'
                                            />
                                        )}
                                    />
                                    {errors.tagName && <FormHelperText sx={{ color: 'error.main' }}>{errors.tagName.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='tagType'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <>
                                                <InputLabel id="tagType">Tag Type</InputLabel>
                                                <Select
                                                    id="tagType"
                                                    fullWidth
                                                    value={value}
                                                    label="Tag Type"
                                                    onChange={onChange}
                                                    error={Boolean(errors.tagType)}
                                                >
                                                    <MenuItem value=''>Select</MenuItem>
                                                    {
                                                        tagType.map(tag => {
                                                            return <MenuItem value={tag}>{tag}</MenuItem>
                                                        })
                                                    }
                                                </Select>
                                            </>
                                        )}
                                    />
                                    {errors.tagType && <FormHelperText sx={{ color: 'error.main' }}>{errors.tagType.message}</FormHelperText>}
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

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }} >
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="btn-light"
                            sx={{ m: 3,  }}
                        >
                            Filter <Filter fontSize='small' />
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
                                tagType.map(tag => {
                                    return <MenuItem onClick={() => filterTags(tag)} value={tag}>{tag}</MenuItem>
                                })
                            }
                        </Menu>
                    </Box>

                    <Listing rows={rows} columns={columns} />
                </Card>
            </Grid>
        </Grid>
    )
}

export default Tags
