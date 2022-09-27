import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import './SearchExercises.scss';

const SearchExercises = () => {
    const [search, setSearch] = useState('');
    const onClickSearch = async () => {
        if (search) {
            
        }
    }
    return (
        <Stack alignItems="center" justifyContent="center" p="20px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '33px'} }} fontWeight={700} textAlign="center" mb="49px">Awesome Exercises You <br /> Should Know</Typography>
            <Box position="relative" mb="72px">
                <TextField 
                    sx={{
                        input: { 
                            fontWeight: '700', 
                            border: 'none', 
                            borderRadius: '40px'
                        },
                        width: { lg: '800px', xs: '350px'},
                        backgroundColor: '#fff'
                    }}
                    height="76px"
                    value={search}
                    type="text"
                    placeholder="Search Exercises"
                    onChange={(evt) => setSearch(evt.target.value.toLowerCase())}
                />
                <Button 
                    className="search-btn"
                    sx={{
                        backgroundColor: '#FA1037',
                        width: { lg: '175px', xs: '80px' },
                        fonSize: { lg: '20px', xs: '14px' },
                        position: 'absolute',
                        right: '0',
                        top: '0'
                    }}
                    onClick={onClickSearch}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchExercises;
