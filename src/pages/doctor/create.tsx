import { useState } from 'react';

// MUI Imports
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import { InputLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Autocomplete from '@mui/material/Autocomplete'

// 3rd party imports
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { doctorFormInitialValues } from '../../types/formTypes/doctorSchema'

const CreateStaff = ({ data, defaultFormValue }: any) => {

    const [staffData, setStaffData] = useState({
        cnic: ''
    })

    const [education, setEducation] = useState(['MBBS', 'FPSC'])
    const [speciality, setSpeciality] = useState(['MBBS', 'FPSC'])
    const countries = ['Pakistan', 'Suadia Arab']
    const [isShowOtherInfo, setOtherInfo] = useState(false)

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
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: defaultFormValue ? defaultFormValue : doctorFormInitialValues
    })
    
    const onSave = () => {

    }

    return (
        <Card sx={{ p: 4 }}>
            <Typography variant="h4" color="secondary.main">Doctor Details</Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSave)} onReset={reset}>
                <Grid container spacing={2} sx={{ my: 3 }}>
                    <Grid item sm={12}>
                        <InputLabel sx={{ mb: 2 }}>Enter your CNIC</InputLabel>

                        <Box sx={{ mb: 4 }}>
                            <FormControl fullWidth>
                                <Controller
                                    name='cnic'
                                    control={control}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <div id="otp" style={{ display: 'flex', marginTop: 2 }}>
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
                                            <input style={{ marginRight: 5, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: "20%", lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setStaffData({ ...staffData, cnic: staffData.cnic.concat(e.target.value) })} />
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
                                        error={Boolean(errors.contactNo)}
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
                                name='speciality'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <>
                                        <InputLabel id="speciality">Speciality</InputLabel>
                                        <Select
                                            id="speciality"
                                            fullWidth
                                            value={value}
                                            label="Speciality"
                                            onChange={onChange}
                                            error={Boolean(errors.speciality)}
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
                            {errors.speciality && <FormHelperText sx={{ color: 'error.main' }}>{errors.speciality.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='licenseNo'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <TextField
                                        autoFocus
                                        label='License Number'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={Boolean(errors.licenseNo)}
                                        placeholder='License Number'
                                        type="text"
                                    />
                                )}
                            />
                            {errors.licenseNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.licenseNo.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item md={6} sm={12} mb={4}>
                        <FormControl fullWidth>
                            <Controller
                                name='registerationDate'
                                control={control}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDatePicker
                                            label="Registeration Date"
                                            // inputFormat="MM/dd/YYYY"
                                            value={value}
                                            onChange={onChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                )}
                            />
                            {errors.registerationDate && <FormHelperText sx={{ color: 'error.main' }}>{errors.registerationDate.message}</FormHelperText>}
                        </FormControl>
                    </Grid>

                    <Grid item sm={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography my={4} ml={2} className='link' onClick={() => setOtherInfo(!isShowOtherInfo)}>Other Information <img src="../../images/pages/drop_icon.png" alt="" /></Typography>
                        <Button size='large' type='submit' variant='contained' sx={{ mb: 7 }} className="gradientBtn">
                            Save
                        </Button>
                    </Grid>

                    {
                        isShowOtherInfo &&
                        <>
                            <Grid item md={6} sm={12} mb={4}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='fatherName'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='Father Name'
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                error={Boolean(errors.fatherName)}
                                                placeholder='Father Name'
                                                type="text"
                                            />
                                        )}
                                    />
                                    {errors.fatherName && <FormHelperText sx={{ color: 'error.main' }}>{errors.fatherName.message}</FormHelperText>}
                                </FormControl>
                            </Grid>

                            <Grid item md={3} sm={12} mb={4}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='dateOfBirth'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <MobileDatePicker
                                                        label="Date of Birth"
                                                        // inputFormat="MM/dd/YYYY"
                                                        value={value}
                                                        onChange={onChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </>
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

                            <Grid item md={3} sm={12} mb={4}>
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

                            <Grid item md={3} sm={12} mb={4}>
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
                                    {errors.institute && <FormHelperText sx={{ color: 'error.main' }}>{errors.institute.message}</FormHelperText>}
                                </FormControl>
                            </Grid>

                            <Grid item md={6} sm={12} mb={4}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='experience'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='Experience'
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                error={Boolean(errors.experience)}
                                                placeholder='Experience'
                                                type="text"
                                            />
                                        )}
                                    />
                                    {errors.experience && <FormHelperText sx={{ color: 'error.main' }}>{errors.experience.message}</FormHelperText>}
                                </FormControl>
                            </Grid>

                            <Grid item md={6} sm={12} mb={4}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='address'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='Address'
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                error={Boolean(errors.address)}
                                                placeholder='Address'
                                                type="text"
                                            />
                                        )}
                                    />
                                    {errors.address && <FormHelperText sx={{ color: 'error.main' }}>{errors.address.message}</FormHelperText>}
                                </FormControl>
                            </Grid>

                            <Grid item md={6} sm={12} mb={4}>
                                <FormControl fullWidth>
                                    <Controller
                                        name='country'
                                        control={control}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            // <TextField
                                            //     autoFocus
                                            //     label='Country'
                                            //     value={value}
                                                // onBlur={onBlur}
                                                // onChange={onChange}
                                                // error={Boolean(errors.c)}
                                            //     placeholder='Country'
                                            //     type="text"
                                            // />
                                            <Autocomplete
                                                autoHighlight
                                                id='autocomplete-country-select'
                                                options={countries}
                                                getOptionLabel={option => option}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                // error={Boolean(errors.country)}
                                                renderOption={(props, option) => (
                                                    <Box component='li' sx={{ '& > img': { mr: 4, flexShrink: 0 } }} {...props}>
                                                        {/* <img
                                                            alt=''
                                                            width='20'
                                                            loading='lazy'
                                                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                        /> */}
                                                        {option}
                                                    </Box>
                                                )}
                                                renderInput={params => (
                                                    <TextField
                                                        {...params}
                                                        label='Choose a country'
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: 'new-password'
                                                        }}
                                                    />
                                                )}
                                            />
                                        )}
                                    />
                                    {errors.country && <FormHelperText sx={{ color: 'error.main' }}>{errors.country.message}</FormHelperText>}
                                </FormControl>
                            </Grid>

                            <Grid item md={6} sm={12} mb={4}>
                                <FormControl fullWidth>
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
                        </>
                    }



                </Grid>

            </form>


        </Card>
    )
}

export default CreateStaff
