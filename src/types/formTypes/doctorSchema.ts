export type doctor = {
    cnic: string,
    name: string,
    contactNo: number,
    speciality: string,
    education: string,
    institute: string,
    registerationDate: Date,
    fatherName: string,
    dateOfBirth: Date,
    gender: string,
    experience: number,
    bloodGroup: string,
    country: string,
    address: string,
    jobType: string,
    age: number,
    licenseNo: string
}

export const doctorFormInitialValues = {
    cnic: '',
    name:'',
    contactNo: '',
    speciality: '',
    education: '',
    institute: '',
    registerationDate: new Date(),
    fatherName: '',
    dateOfBirth: new Date(),
    gender: '',
    experience: 0,
    bloodGroup: '',
    country: '',
    address: '',
    jobType: '',
    age: 0,
    licenseNo: ''
}
