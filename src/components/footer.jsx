import {Box, Typography} from "@mui/material"

const Footer = () => {
    return(
        <Box sx={{
            width: '100%',
            height: '5vh',
            background: '#010340',
            color: 'white',
            display:'flex',
            justifyContent: 'center',
            alignItems:'center',
        }}>
            <Box>
                <Typography sx={{
                    fontWeight: 'bold'
                }}>All copyright owned by NUDE</Typography>
            </Box>
        </Box>
    )
}

export default Footer;