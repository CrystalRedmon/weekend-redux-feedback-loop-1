import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

function ReviewPage() {
    const history = useHistory();

    // fetching state from redux store
    const feedback = useSelector( store => store.feedback);
    
    console.log('feedback', feedback);

    //submitting the feedback, previously stored in redux state, to the server and database
    const submitFeedback = (evt) => {
        evt.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then((response) => {
            console.log('POST success');
        })
        .catch((err) => {
            console.error('error in POST', err);
        });
        // navigate to next page
        history.push('/thankyoupage');
    }        

    return(
        <>
        {/* calling the fetched redux object (feedback) and displaying its properties */}
            <h1>Review Your Feedback</h1>
            <h2> Feelings: {feedback.feeling}</h2>
            <h2> Understanding: {feedback.understanding}</h2>
            <h2> Support: {feedback.support}</h2>
            <h2> Comments: {feedback.comments}</h2>
            {/* MUI button */}
            <Button 
                onClick={submitFeedback}
                type="submit"
                    variant="contained"
                    size='large'
                    sx={{ m: 3 }}
            > 
                Submit
            </Button>
        </>
    );
}

export default ReviewPage;