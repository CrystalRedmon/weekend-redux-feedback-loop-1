import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, Slider, Box } from '@mui/material';

function UnderstandPage(){
    //local state, default 3
    const [understanding, setUnderstanding] = useState(3);
    const dispatch = useDispatch();
    const history = useHistory();


    // dispatch to redux store on submit
    function handleChange(evt){
        evt.preventDefault();

        dispatch({
            type:'ADD_UNDERSTANDING',
            payload: understanding
        });
        // navigate to next page
        history.push('/supportpage')
    }

    // slider marks
    const marks=[
        {
            value: 0,
            label: 'Head Empty 100%'
        },
        {
            value: 1,
            label: 'Not Well'
        },
        {
            value: 2,
            label: 'Having a Little Trouble'
        },
        {
            value: 3,
            label: 'Decently'
        },
        {
            value: 4,
            label: 'I Got a Handle On It'
        },
        {
            value: 5,
            label: `I Know It All!!`
        },
    ];
    
     //when slider moves, set value to local state
     const handleSlider = (evt) => {
        setUnderstanding(evt.target.value);
    }

    return(
        <>
            <section>
                <h1> How well are you understanding the content?</h1>
            </section>
            <form name ="understandingForm" onSubmit={handleChange}>
                
                {/* MUI components. Box, slider, button */}
                <Box sx={{ m: 15 }}>
                <Slider
                    defaultValue={3}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={marks}
                    min={0}
                    max={5}
                    onChange={handleSlider}
                />
                </Box>

                <Button 
                    type="submit"
                    variant="contained"
                    size='large'
                    sx={{ m: 3 }}
                >
                    Next
                </Button>

            </form>
        </>
    );
}

export default UnderstandPage;