import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material';

const SearchExercises = () => {
    return (
        <Stack alignItems="center" justifyContent="center" p="20px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '33px'} }} fontWeight={700} textAlign="center" mb="49px">Awesome Exercises You <br /> Should Know</Typography>
        </Stack>
    )
}

export default SearchExercises;
