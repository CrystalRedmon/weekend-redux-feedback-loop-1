import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function FeelingsPage(){
    const dispatch = useDispatch();
    const history = useHistory();


    function handleSubmit(evt){
        evt.preventDefault();
        console.log('a thing', evt.target.value)
        dispatch({
            type:'ADD_FEELINGS',
            payload: evt.target.value
        })

    }


    


    return(
        <>
            <section>
                <h1> How are you feeling today?</h1>
            </section>
            <form>
                <input 
                    onChange={handleSubmit}
                    type="number" 
                    min="0" 
                    max="5"

                    required
                > 
                </input>

                <button type='submit'>
                    Next
                </button>

            </form>
        
        
        </>
    );
}

export default FeelingsPage;