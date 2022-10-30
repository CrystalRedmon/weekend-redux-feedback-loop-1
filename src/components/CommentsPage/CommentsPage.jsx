import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { Button, Slider, Box } from '@mui/material';

function CommentsPage(){
    const [comments, setComments] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(evt){
        evt.preventDefault();
        

        dispatch({
            type:'ADD_COMMENTS',
            payload: comments
        })
        history.push('/reviewpage')
    }

    const handleComments = (evt) => {
        setComments(evt.target.value);
    }

    return(
         <>
            <section>
                <h1> Any additional comments?</h1>
            </section>
            <form name="commentsForm" onSubmit={handleChange}>
                <input 
                    name="input"
                    type="text" 
                    min="0" 
                    max="5"
                    onChange={handleComments}
                > 
                </input>

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