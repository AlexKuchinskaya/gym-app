import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'; 
import Logo from '../../assets/images/Logo.png'
import './Navbar.scss';

const Navbar = () => {
    return (
        <Stack 
            className="navbar"
            direction="row"
            // justifyContent="space-between"
            sx={{ 
                gap: {
                    sm: '122px',
                    xs: '48px'
                },
                mt: {
                    sm: '32px',
                    xs: '20px'
                }
            }}
            px="20px"
        >
            <Link to="/">
                <img src={Logo} className="navbar-image" alt="logo" />
            </Link>
            <Stack 
                className="navbar-links"
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link className="nav-home" to="/">Home</Link>
                <a className="nav-exercises" href="#exercises">Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar;