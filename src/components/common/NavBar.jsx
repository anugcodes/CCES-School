import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from '../../assets/logo3.jpg'


export default function NavBar() {
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" style={{ background: '#00aeef' }} >
                    <Toolbar className='d-flex justify-content-between'>
                        {/* <img src={logo1} alt='logo' width={200} height={100} /> */}
                        <h2>CCES & WASH</h2>
                        {
                            (window.location.pathname.includes('/survey')) ?
                                <>
                                    <Link to={{ pathname: "/" }}>
                                        <Button variant="outlined" style={{ color: "white", borderWidth: "4px", borderColor: "white" }}>Home</Button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to={{ pathname: "/survey", hash: "sectionA" }}>
                                        <Button variant="outlined" style={{ color: "white", borderWidth: "4px", borderColor: "white" }}>Take Survey</Button>
                                    </Link>
                                </>
                        }

                    </Toolbar>
                </AppBar>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" style={{ background: '#fff' }} >
                    <Toolbar className='d-flex justify-content-around py-2 flex-wrap'>
                        <img src={logo1} alt='logo' width={100} height={100} />
                        <img src={logo3} alt='logo' width={100} height={100} />
                        <img src={logo2} alt='logo' width={150} height={75} />

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}