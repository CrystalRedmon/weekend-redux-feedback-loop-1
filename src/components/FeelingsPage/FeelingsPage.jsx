import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, Slider, Box } from '@mui/material';


function FeelingsPage(){
    const [feeling, setFeeling] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(evt){
        evt.preventDefault();
        // let ranking = document.forms['feelingForm']['input'].value;

        dispatch({
            type:'ADD_FEELING',
            payload: feeling
        });
        history.push('/understandingpage');
    }

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

    const handleSlider = (evt) => {
        setFeeling(evt.target.value);
    }

    return(
        <>
            <section>
                <h1> How are you feeling today?</h1>
            </section>
            <form name ="feelingForm" onSubmit={handleChange}>
                {/* <Input 
                    // color="info"
                    inputProps={{ min: 0, max: 5 }}
                    placeholder="rating?"
                    name="input"
                    type="number" 
                    max="5"
                    required
                    variant="outlined"
                > 
                </Input> */}

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

export default FeelingsPage;