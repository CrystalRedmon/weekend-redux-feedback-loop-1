import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, Slider, Box } from '@mui/material';


function FeelingsPage(){
    //local state, default 3
    const [feeling, setFeeling] = useState(3);
    const dispatch = useDispatch();
    const history = useHistory();

    // dispatch to redux store on submit
    function handleChange(evt){
        evt.preventDefault();

        dispatch({
            type:'ADD_FEELING',
            payload: feeling
        });

        // navigate to next page
        history.push('/understandingpage');
    }

    // slider marks
    const marks=[
        {
            value: 0,
            label: 'I AM IN DESPAIR'
        },
        {
            value: 1,
            label: 'Not Good'
        },
        {
            value: 2,
            label: 'Little Frustrated'
        },
        {
            value: 3,
            label: 'OK'
        },
        {
            value: 4,
            label: 'Good'
        },
        {
            value: 5,
            label: 'Im Killin It! 😎'
        },
    ];

    //when slider moves, set value to local state
    const handleSlider = (evt) => {
        setFeeling(evt.target.value);
    }

    return(
        <>
            <section>
                <h1> How are you feeling today?</h1>
            </section>
            <form name ="feelingForm" onSubmit={handleChange}>
                
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

export default FeelingsPage;