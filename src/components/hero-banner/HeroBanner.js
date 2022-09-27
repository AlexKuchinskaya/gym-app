import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import './HeroBanner.scss';
import HeroBannerImage from '../../assets/images/banner.png';
// const useStyles = makeStyles({
//     text: {
//         fontSize: '26px',
//         // color: '$red'
//     }
// })
const HeroBanner = () => {
    // const { text } = useStyles();
    // console.lof('text', text);
    return (
        <Box
            sx={{
                mt: {
                    lg: '212px',
                    xs: '70px'
                },
                ml: { sm: '50px' }
            }}
            position="relative"
            p="20px"
        >
            <Typography
                className="banner"
            >
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx= {{
                    fontSize: {
                        lg: '44px',
                        xs: '40px' 
                    }
                }}
                mb="23px"
                mt="30px"
            >
                Sweat, Smile <br/> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#FF2625', padding: '10px' }}>Explore Exercises</Button>
            <Typography fontWeight={600} color="#FF2625" sx={{
              opacity: 0.1,
              display: { lg: 'block', xs: 'none' },
              fontSize: '200px'
            }}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="banner-img"/>
        </Box>
    )
}

export default HeroBanner;
