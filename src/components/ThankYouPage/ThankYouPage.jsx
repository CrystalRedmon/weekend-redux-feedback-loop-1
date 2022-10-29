import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

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
            <button onClick={newFeedback}>
                Leave New Feedback
            </button>
        </>
    );
}

export default ThankYouPage;