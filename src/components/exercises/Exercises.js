import React, { useState, useEffect } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { fetchData, execerciseOptions } from '../../utils/fetchData';
import ExerciseCard from '../exercises-card/ExerciseCard';

const Exercises = ({ bodyPart, exercises, setExercises }) => {
    console.log('exercises', exercises)
    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography variant="h2">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)}
            </Stack>
        </Box>
    )
}

export default Exercises;
