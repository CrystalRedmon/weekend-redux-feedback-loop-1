import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, TextField, Box} from '@mui/material';

function CommentsPage(){
    //local state, empty string on default
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    //dispatch to redux store on submit
    function handleChange(evt){
        evt.preventDefault();     

        dispatch({
            type:'ADD_COMMENTS',
            payload: comments
        });
        // navigate to next page
        history.push('/reviewpage')
    }
    //as comments are made, store the value in local state
    const handleComments = (evt) => {
        setComments(evt.target.value);
    }

    return(
         <>
            <section>
                <h1> Any additional comments?</h1>
            </section>
            <form name="commentsForm" onSubmit={handleChange}>
                {/* MUI components. Box, textField, and button */}
                <Box >
                    <TextField 
                        sx={{width: '50%'}}
                        label="get it off your chest" 
                        variant="filled"
                        multiline
                        minRows="4"
                        required
                        onChange={handleComments}
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

export default CommentsPage;