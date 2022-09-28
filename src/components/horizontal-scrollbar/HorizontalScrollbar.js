import React from 'react'
import { Box } from '@mui/material';
import BodyPart from '../../components/body-part/BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <div>
           {data.map((item) => (
                <Box
                    key={item || item.id }
                >
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
             )
           )} 
        </div>
    )
}

export default HorizontalScrollbar;