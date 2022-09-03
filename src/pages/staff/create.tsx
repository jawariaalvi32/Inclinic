import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import { CreateOnModalProps } from 'src/types/ComponentTypes';
import { InputLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button';

// 3rd party imports
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const CreateStaff = ({ isOpen, openModal, data }: CreateOnModalProps) => {

    const [staffData, setStaffData] = useState({
        cnic: ''
    })

    const [education, setEducation] = useState(['MBBS', 'FPSC'])
    const [speciality, setSpeciality] = useState(['MBBS', 'FPSC'])

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

    const onSave = () => {

    }

    return (
        <Card sx={{ p: 4 }}>
            <Typography variant="h4" color="secondary.main">Staff Details</Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSave)}>
                <Grid container spacing={2} sx={{ my: 3 }}>
                    <Grid item sm={12}>
                        <Box sx={{ mb: 4 }}>
                            <InputLabel sx={{ mb: 2 }}>Enter you CNIC</InputLabel>

                            <FormControl fullWidth>

                                <Controller
                                    name='name'
                                    control={control}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <div id="otp" style={{ display: 'flex', marginTop: 2 }}>
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                        </div>
                                    )}
                                />
                                {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
                            </FormControl>

                        </Box>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='name'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <TextField
                                        autoFocus
                                        label='Name'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={Boolean(errors.name)}
                                        placeholder='name'
                                    />
                                )}
                            />
                            {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='contactNo'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <TextField
                                        autoFocus
                                        label='Contact Number'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={Boolean(errors.name)}
                                        placeholder='Contact Number'
                                        type="number"
                                    />
                                )}
                            />
                            {errors.contactNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.contactNo.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='relation'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="relation">Relation</InputLabel>
                                        <Select
                                            id="relation"
                                            fullWidth
                                            value={value}
                                            label="Relation"
                                            onChange={onChange}
                                            error={Boolean(errors.relation)}
                                        >
                                            <MenuItem value=''>Select</MenuItem>
                                            <MenuItem value='father'>Father</MenuItem>
                                            <MenuItem value='spouse'>Spouse</MenuItem>
                                        </Select>
                                    </>
                                )}
                            />
                            {errors.relation && <FormHelperText sx={{ color: 'error.main' }}>{errors.relation.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='fatherSpouse'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <TextField
                                        autoFocus
                                        label='Father / Spouse'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={Boolean(errors.name)}
                                        placeholder='Father / Spouse'
                                        type="text"
                                    />
                                )}
                            />
                            {errors.fatherSpouse && <FormHelperText sx={{ color: 'error.main' }}>{errors.father.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={3} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='dateOfBirth'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDatePicker
                                            label="Date of Birth"
                                            value={value}
                                            onChange={onChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                )}
                            />
                            {errors.dateOfBirth && <FormHelperText sx={{ color: 'error.main' }}>{errors.dateOfBirth.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={3} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='age'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <TextField
                                        autoFocus
                                        label='Age'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={Boolean(errors.age)}
                                        placeholder='Age'
                                        type="text"
                                    />
                                )}
                            />
                            {errors.age && <FormHelperText sx={{ color: 'error.main' }}>{errors.age.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='gender'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="gender">Gender</InputLabel>
                                        <Select
                                            id="gender"
                                            fullWidth
                                            value={value}
                                            label="Gender"
                                            onChange={onChange}
                                            error={Boolean(errors.gender)}
                                        >
                                            <MenuItem value=''>Select</MenuItem>
                                            <MenuItem value='Male'>Male</MenuItem>
                                            <MenuItem value='Female'>Female</MenuItem>
                                            <MenuItem value='Other'>Other</MenuItem>
                                        </Select>
                                    </>
                                )}
                            />
                            {errors.gender && <FormHelperText sx={{ color: 'error.main' }}>{errors.gender.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='education'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="education">Education</InputLabel>
                                        <Select
                                            id="education"
                                            fullWidth
                                            value={value}
                                            label="Education"
                                            onChange={onChange}
                                            error={Boolean(errors.education)}
                                        >
                                            <MenuItem value=''>Select</MenuItem>
                                            {
                                                education.map(education => {
                                                    return <MenuItem value={education}>{education}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </>
                                )}
                            />
                            {errors.education && <FormHelperText sx={{ color: 'error.main' }}>{errors.education.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='institute'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <TextField
                                        autoFocus
                                        label='Institute'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={Boolean(errors.institute)}
                                        placeholder='Institute'
                                        type="text"
                                    />
                                )}
                            />
                            {errors.institute && <FormHelperText sx={{ color: 'error.main' }}>{errors.experience.message}</FormHelperText>}
                        </FormControl>
                    </Grid>



                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='bloodGroup'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="bloodGroup">Blood Group</InputLabel>
                                        <Select
                                            id="bloodGroup"
                                            fullWidth
                                            value={value}
                                            label="Blood Group"
                                            onChange={onChange}
                                            error={Boolean(errors.bloodGroup)}
                                        >
                                            <MenuItem value=''>Select</MenuItem>
                                            {
                                                speciality.map(speciality => {
                                                    return <MenuItem value={speciality}>{speciality}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </>

                                )}
                            />
                            {errors.bloodGroup && <FormHelperText sx={{ color: 'error.main' }}>{errors.bloodGroup.message}</FormHelperText>}
                        </FormControl>
                    </Grid>


                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth >
                            <Controller
                                name='jobType'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="jobType">Job Type</InputLabel>
                                        <Select
                                            id="jobType"
                                            fullWidth
                                            value={value}
                                            label="Job Type"
                                            onChange={onChange}
                                            error={Boolean(errors.jobType)}
                                        >
                                            <MenuItem value=''>Select</MenuItem>
                                            {
                                                speciality.map(speciality => {
                                                    return <MenuItem value={speciality}>{speciality}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </>

                                )}
                            />
                            {errors.jobType && <FormHelperText sx={{ color: 'error.main' }}>{errors.jobType.message}</FormHelperText>}
                        </FormControl>
                    </Grid>


                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='dutyTimings'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="dutyTimings">Duty Timings</InputLabel>
                                        <Select
                                            id="dutyTimings"
                                            fullWidth
                                            value={value}
                                            label="Duty Timings"
                                            onChange={onChange}
                                            error={Boolean(errors.dutyTimings)}
                                        >
                                            <MenuItem value=''>Select</MenuItem>
                                            {
                                                speciality.map(speciality => {
                                                    return <MenuItem value={speciality}>{speciality}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </>

                                )}
                            />
                            {errors.bloodGroup && <FormHelperText sx={{ color: 'error.main' }}>{errors.bloodGroup.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='addresss'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <TextField
                                        autoFocus
                                        label='Address'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={Boolean(errors.addresss)}
                                        placeholder='Address'
                                        type="text"
                                    />
                                )}
                            />
                            {errors.addresss && <FormHelperText sx={{ color: 'error.main' }}>{errors.address.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='country'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="country">Country</InputLabel>
                                        <Select
                                            id="country"
                                            fullWidth
                                            value={value}
                                            label="Country"
                                            onChange={onChange}
                                            error={Boolean(errors.country)}
                                        >
                                            <MenuItem value=''>Select</MenuItem>
                                            {
                                                speciality.map(speciality => {
                                                    return <MenuItem value={speciality}>{speciality}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </>
                                )}
                            />
                            {errors.country && <FormHelperText sx={{ color: 'error.main' }}>{errors.country.message}</FormHelperText>}
                        </FormControl>
                    </Grid>


                    <Grid item md={6} sm={12} mt={2} sx={{ textAlign: 'right ' }}>
                        <Button size='large' type='submit' variant='contained' className="gradientBtn">
                            Save
                        </Button>
                    </Grid>


                </Grid>

            </form>


        </Card>
    )
}

export default CreateStaff
