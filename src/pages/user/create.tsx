import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { CreateOnModalProps } from 'src/types/ComponentTypes';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const CreateUser = ({ isOpen, openModal, data }: CreateOnModalProps) => {

    const handleClickOpen = () => {
        openModal(true);
    };

    const handleClose = () => {
        openModal(false);
    };

    const onSave = (data: any) => {

        if (Object.keys(errors).length === 0) {
            handleClose()
        }
    }

    // Form Validations
    const schema = yup.object().shape({
        userName: yup.string().required(),
        password: yup.string().min(5).required(),
        confirmPassword: yup.string().required()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        role: yup.string().required(),
        staff: yup.string().required()
    })

    const {
        control,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        reValidateMode: "onChange",
        resolver: yupResolver(schema)
    })
    


    const [userRole, setuserRole] = React.useState<string[]>(['Admin', 'Staff', 'Douserctor']);

    return (
        <div>
            <Button size='small' variant='contained' className="gradientBtn" sx={{ px: 4 }} onClick={handleClickOpen}>
                Add User
            </Button>

            <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth >
                <DialogTitle variant="h4" color="secondary.main">User</DialogTitle>
                <DialogContent>
                    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSave)}>
                        <Grid container spacing={2} >

                            <Grid item md={6} sm={12} sx={{ mt: 2 }}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='userName'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='Username'
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                error={Boolean(errors.userName)}
                                                placeholder='username'
                                            />
                                        )}
                                    />
                                    {errors.userName && <FormHelperText sx={{ color: 'error.main' }}>{errors.userName.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} sx={{ mt: 2 }}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='role'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <>
                                                <InputLabel id="userRole">User Role</InputLabel>
                                                <Select
                                                    id="userRole"
                                                    fullWidth
                                                    value={value}
                                                    label="Role"
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                    error={Boolean(errors.role)}
                                                >
                                                    <MenuItem value=''>Select</MenuItem>
                                                    {
                                                        userRole.map(role => {
                                                            return <MenuItem value={role}>{role}</MenuItem>
                                                        })
                                                    }
                                                </Select>
                                            </>

                                        )}
                                    />
                                    {errors.role && <FormHelperText sx={{ color: 'error.main' }}>{errors.role.message}</FormHelperText>}
                                </FormControl>

                            </Grid>
                            <Grid item md={6} sm={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='staff'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <>
                                                <InputLabel id="staff">Staff</InputLabel>
                                                <Select
                                                    id="staff"
                                                    fullWidth
                                                    value={value}
                                                    label="Staff"
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                    error={Boolean(errors.staff)}
                                                >
                                                    <MenuItem value=''>Select</MenuItem>
                                                    {
                                                        userRole.map(role => {
                                                            return <MenuItem value={role}>{role}</MenuItem>
                                                        })
                                                    }
                                                </Select>
                                            </>
                                        )}
                                    />
                                    {errors.staff && <FormHelperText sx={{ color: 'error.main' }}>{errors.staff.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='password'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                label='Password'
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                error={Boolean(errors.password)}
                                                placeholder='Password'
                                            />
                                        )}
                                    />
                                    {errors.password && <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='confirmPassword'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                label='Confirm Password'
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                error={Boolean(errors.confirmPassword)}
                                                placeholder='Confirm Password'
                                            />
                                        )}
                                    />
                                    {errors.confirmPassword && <FormHelperText sx={{ color: 'error.main' }}>{errors.confirmPassword.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} sx={{ textAlign: "right", mt: 5 }}>
                                <Button size='large' type='submit' variant='contained' sx={{ mb: 7 }} className="gradientBtn" onClick={onSave}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </DialogContent>
            </Dialog>
        </div >
    )
}

export default CreateUser
