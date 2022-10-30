import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button } from '@mui/material';

function ThankYouPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    const newFeedback = () => {
        dispatch({
            type: 'RESET_STATE',
        })
        history.push('/');
    }

    return(
        <>
            <h1>Thank You!</h1>
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