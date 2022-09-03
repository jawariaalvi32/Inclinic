// ** React Imports
import { ReactNode, SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// Styled Components
const ForgotPasswordIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    padding: theme.spacing(20),
    paddingRight: '0 !important',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(10)
    }
}))

const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
    maxWidth: '48rem',
    [theme.breakpoints.down('xl')]: {
        maxWidth: '38rem'
    },
    [theme.breakpoints.down('lg')]: {
        maxWidth: '30rem'
    }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
        maxWidth: 500
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: 800
    }
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: 500
    }
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 600,
    letterSpacing: '0.18px',
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const VerificationCode = () => {
    // ** Hooks
    const theme = useTheme()
    const { settings } = useSettings()

    // ** Vars
    const { skin } = settings
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    const [OTP, setOTP] = useState('')

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
    }

    const imageSource =
        skin === 'bordered' ? 'auth-v2-forgot-password-illustration-bordered' : 'auth-v2-forgot-password-illustration'

    return (
        <Box className='content-right'>
            {!hidden ? (
                <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                    <ForgotPasswordIllustrationWrapper>
                        <ForgotPasswordIllustration
                            alt='forgot-password-illustration'
                            src={`/images/pages/logo.png`}
                        />
                    </ForgotPasswordIllustrationWrapper>
                </Box>
            ) : null}
            <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
                <Box
                    sx={{
                        p: 7,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'background.paper'
                    }}
                >
                    <BoxWrapper sx={{ mr: 20 }}>
                        <Box
                            sx={{
                                top: 30,
                                left: 40,
                                display: 'flex',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                        </Box>
                        <Box sx={{ mb: 6 }}>
                            <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src="/images/pages/forgot_ps_icon.png" width={200} height={200}
                                    loading="lazy"
                                />
                            </Box>
                            <TypographyStyled variant='h3' color="secondary.main">Verification Code</TypographyStyled>
                            <Typography variant='body1'>
                                We have sent code to your email. Kindly check your email.
                            </Typography>
                        </Box>
                        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                            <Box sx={{ align: 'center', mb: 4 }}>
                                        <div id="otp" style={{ display: 'flex', marginTop: 2, justifyContent: 'center' }}>
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: 100, lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setOTP(e.target.value)} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: 100, lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setOTP(e.target.value)} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: 100, lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setOTP(e.target.value)} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: 100, lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setOTP(e.target.value)} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: 100, lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setOTP(e.target.value)} />
                                            <input style={{ marginRight: 10, textAlign: 'center', borderRadius: 2, border: '1px solid #ced4da', width: 100, lineHeight: '3rem' }} type="text" id="first" maxLength={1} onChange={(e) => setOTP(e.target.value)} />
                                        </div>
                            </Box>
                            <Button fullWidth size='large' type='submit' className="gradientBtn" variant='contained' sx={{ mb: 5.25 }}>
                                Verify
                            </Button>
                        </form>
                    </BoxWrapper>
                </Box>
            </RightWrapper>
        </Box>
    )
}

VerificationCode.guestGuard = true
VerificationCode.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default VerificationCode
