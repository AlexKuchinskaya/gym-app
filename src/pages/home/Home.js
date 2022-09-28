import React, { useState } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import SearchExercises from '../../components/search-exercises/SearchExercises';
import Exercises from '../../components/exercises/Exercises';
import './Home.scss';

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    return (
        <Box>
            <HeroBanner />
            <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
            <Exercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
        </Box>
    )
}

export default Home;