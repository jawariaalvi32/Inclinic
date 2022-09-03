// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'Roles',
      icon: ShieldOutline,
      path: '/role'
    },
    {
      title: 'Users',
      icon: AccountOutline,
      path: '/user'
    },
    {
      title: 'Permissions',
      icon: LockOutline,
      path: '/permission'
    },
    {
      title: 'Tags',
      icon: PackageVariantClosed,
      path: '/tags'
    },
    {
      title: 'Staff',
      icon: PackageVariantClosed,
      path: '/staff'
    },
    {
      title: 'Staff',
      icon: PackageVariantClosed,
      path: '/staff/role'
    },
    {
      title: 'Doctors',
      icon: AccountOutline,
      path: '/doctor'
    },
    // {
    //   title: 'Patients',
    //   icon: AccountOutline,
    //   path: '/patient'
    // },
    // {
    //   title: 'Appointments',
    //   icon: CalendarBlankOutline,
    //   path: '/doctor/appointment'
    // },

  ]
}

export default navigation
