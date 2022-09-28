import React from 'react'
import { Stack, Typography } from '@mui/material';
import IconDumbbel from '../../assets/icons/gym.png';
import './BodyPart.scss';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="body-part-card"
        >
            <img className="body-part-icon" src={IconDumbbel} alt="dumbbel"/>
        </Stack>
    )
}

export default BodyPart;
