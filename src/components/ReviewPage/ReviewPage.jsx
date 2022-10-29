import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
function ReviewPage() {
    const history = useHistory();
    const feedback = useSelector( store => store.feedback);
    
    console.log('feedback', feedback);
    // let info = {
    //     feeling: 5,
    //     understanding: 1000,
    //     support: 1000,
    //     comments: 'blah', 
    //     flagged: true,
    //     date: '5-5-2005'
    // }
   
    
    const submitFeedback = (evt) => {
        evt.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then((response) => {
            console.log('post success');
        })
        .catch((err) => {
            console.error('oh no');
        });

        history.push('/thankyoupage');
    }        

    return(
        //gonna do a POST to the server here
        <>
            <h1>Review Your Feedback</h1>
            <h2> Feelings: {feedback.feeling}</h2>
            <h2> Understanding: {feedback.understanding}</h2>
            <h2> Support: {feedback.support}</h2>
            <h2> Comments: {feedback.comments}</h2>
            <button 
                onClick={submitFeedback}
            > 
                Submit
            </button>
        </>
    );
}

export default ReviewPage;