import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, Slider, Box } from '@mui/material';

function SupportPage(){
    //local state, default 3
    const [support, setSupport] = useState(3);
    const dispatch = useDispatch();
    const history = useHistory();

    // dispatch to redux store on submit
    function handleChange(evt){
        evt.preventDefault();

        dispatch({
            type:'ADD_SUPPORT',
            payload: support
        });
        // navigate to next page
        history.push('/commentspage');
    }

    // slider marks
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

    //when slider moves, set value to local state
    const handleSlider = (evt) => {
        setSupport(evt.target.value);
    }

    return(
        <>
            <section>
                <h1> How well are you being supported?</h1>
            </section>
                <form name="supportForm" onSubmit={handleChange}>
                    {/* MUI components. Box, Slider, and Button */}
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

export default SupportPage;