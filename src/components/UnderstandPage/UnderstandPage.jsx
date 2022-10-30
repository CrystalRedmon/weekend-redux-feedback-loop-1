import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, Slider, Box } from '@mui/material';

function UnderstandPage(){
    const [understanding, setUnderstanding] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();


    function handleChange(evt){
        evt.preventDefault();
        // let ranking = document.forms['understandingForm']['input'].value

        dispatch({
            type:'ADD_UNDERSTANDING',
            payload: understanding
        })
        history.push('/supportpage')
    }

    const marks=[
        {
            value: 0,
            label: 'Head Empty 100%'
        },
        {
            value: 1,
            label: 'Not well'
        },
        {
            value: 2,
            label: 'Having a little trouble'
        },
        {
            value: 3,
            label: 'OK'
        },
        {
            value: 4,
            label: 'I got a handle on it'
        },
        {
            value: 5,
            label: `I know it all!!`
        },
    ];
    
    const handleSlider = (evt) => {
        setUnderstanding(evt.target.value);
    }

    return(
        <>
            <section>
                <h1> How well are you understanding the content?</h1>
            </section>
            <form name ="understandingForm" onSubmit={handleChange}>
                <Box sx={{ m: 15 }}>
                <Slider
                    defaultValue={0}
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