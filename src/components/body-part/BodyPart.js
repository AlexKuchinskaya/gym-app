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
            sx={{
                borderTop: bodyPart === item ? { borderTop: '4px solid #FF2625'} : '',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                backgroundColor: '#fff',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item);
            }}
        >
            <img className="body-part-icon" src={IconDumbbel} alt="dumbbel"/>
            <Typography fontSize="20px" fontWeight="600" textTransform="capitalize" color="#3A1212">{item}</Typography>
        </Stack>
    )
}

export default BodyPart;
