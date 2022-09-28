import React, { useContext } from 'react'
import { Box } from '@mui/material';
import BodyPart from '../../components/body-part/BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
    return (
        <Box disabled={isFirstItemVisible} className="left-arrow" onClick={() => scrollPrev()}>
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Box>
    );
}

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Box disabled={isLastItemVisible} className="right-arrow" onClick={() => scrollNext()}>
            <img src={RightArrowIcon} alt="right-arrow" />
        </Box>
    );
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
           {data.map((item) => (
                <Box
                    key={item || item.id}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
             )
           )} 
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;