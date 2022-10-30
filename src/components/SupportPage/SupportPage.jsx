import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, Slider, Box } from '@mui/material';

function SupportPage(){
    const [support, setSupport] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();


    function handleChange(evt){
        evt.preventDefault();

        dispatch({
            type:'ADD_SUPPORT',
            payload: support
        });
        history.push('/commentspage');
    }
    const marks=[
        {
            value: 0,
            label: 'Truly I am Alone'
        },
        {
            value: 1,
            label: 'Teacher Looked at Me Once'
        },
        {
            value: 2,
            label: 'Slightly Neglected'
        },
        {
            value: 3,
            label: 'Teacher is Teaching'
        },
        {
            value: 4,
            label: 'Everyone is Helpful'
        },
        {
            value: 5,
            label: 'Amazing!'
        },
    ];

    const handleSlider = (evt) => {
        setSupport(evt.target.value);
    }

    return(
        <>
            <section>
                <h1> How well are you being supported?</h1>
            </section>
            <form name="supportForm" onSubmit={handleChange}>
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

export default SupportPage;