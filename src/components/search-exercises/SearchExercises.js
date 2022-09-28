import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import './SearchExercises.scss';
import { fetchData, execerciseOptions } from '../../utils/fetchData';
import HorizontalScrollbar from '../../components/horizontal-scrollbar/HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const urlExercises = "https://exercisedb.p.rapidapi.com/exercises";
    const urlBodyParts = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(()=> {
        const fetchExetcisesData = async () => {
            const bodyParts = await fetchData(urlBodyParts, execerciseOptions);
            setBodyParts(['all', ...bodyParts]);
        };
        fetchExetcisesData();
    }, [])

    const onClickSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(urlExercises, execerciseOptions);
            console.log('exercisesData', exercisesData);
            const searchedExercise = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercise);
        }
    }
    return (
        <Stack alignItems="center" justifyContent="center" p="20px">
            <Typography variant="h2" sx={{ fontSize: { lg: '44px', xs: '33px'} }} fontWeight={700} textAlign="center" mb="49px">Awesome Exercises You <br /> Should Know</Typography>
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
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises;
