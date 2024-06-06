import { Paper, Box, Link } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ display: 'flex', width: '100%', position: 'absolute', bottom: '0' }}>
            <Paper sx={{ position: '', bottom: '0px', display: 'flex', width: '100%',alignItems:'center', justifyContent: 'center', gap: '20px',height:'70px' }} elevation={3}>
                <Link variant='body2' href='/' underline='hover'>Privacy Policy</Link>
                <Link variant='body2' href='/' underline='hover'>Terms of Service</Link>
            </Paper>
        </Box>
    )
}