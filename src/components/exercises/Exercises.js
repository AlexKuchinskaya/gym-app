import React, { useState, useEffect } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { fetchData, execerciseOptions } from '../../utils/fetchData';

const Exercises = ({ bodyPart, exercises, setExercises }) => {
    console.log('exercises', exercises)
    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography variant="h2">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {/* {exercises.map((excercise, index) => console.log(excercise))} */}
            </Stack>
        </Box>
    )
}

export default Exercises;
