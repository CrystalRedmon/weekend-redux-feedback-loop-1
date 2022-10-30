import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button } from '@mui/material';

function ThankYouPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    // clearing the redux state for new feedback info upon button click
    const newFeedback = () => {
        dispatch({
            type: 'RESET_STATE',
        });
        // navigate to next page
        history.push('/');
    }

    return(
        <>
            <h1>Thank You!</h1>
            {/* MUI button component */}
            <Button 
                onClick={newFeedback}
                type="submit"
                    variant="contained"
                    size='large'
                    sx={{ m: 3 }}
            >
                Leave New Feedback
            </Button>
        </>
    );
}

export default ThankYouPage;