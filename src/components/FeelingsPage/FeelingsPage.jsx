import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function FeelingsPage(){
    const dispatch = useDispatch();
    const history = useHistory();


    let info = {
        feeling: 5,
        understanding: 1000,
        support: 1000,
        comments: 'blah', 
        flagged: true,
        date: '5-5-2005'
    }
    
    const feelingRating = () => {

    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: info
        })
        .then((response) => {
            console.log('post success');
        })
        .catch((err) => {
            console.error('oh no');
        });
    }        



    


    return(
        <>
            <section>
                <h1> How are you feeling today?</h1>
            </section>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={feelingRating}
                    type="number" 
                    min="0" 
                    max="5"

                    required
                > 
                </input>

                <button>
                    Next
                </button>

            </form>
        
        
        </>
    );
}

export default FeelingsPage;