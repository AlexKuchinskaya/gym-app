import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCard.scss';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
            <Stack direction="row">
                <Button className="exercise-type">
                    {exercise.bodyPart}
                </Button>
                <Button className="exercise-type exercise-type--target">
                    {exercise.target}
                </Button>
            </Stack>
            <Typography className="exercise-name">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard
