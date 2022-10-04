import React, { useState, useEffect } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { fetchData, execerciseOptions } from '../../utils/fetchData';
import ExerciseCard from '../exercises-card/ExerciseCard';

const Exercises = ({ bodyPart, exercises, setExercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    console.log('exercises', exercises)
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const onPageChange = (evt, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography variant="h2">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {currentExercise.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > exercisesPerPage && ( 
                    <Pagination 
                        variant="outlined"
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        size="large"
                        page={currentPage}
                        onChange={onPageChange}
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises;
