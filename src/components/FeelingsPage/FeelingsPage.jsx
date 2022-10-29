import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function FeelingsPage(){
    const dispatch = useDispatch();
    const history = useHistory();


    function handleChange(evt){
        evt.preventDefault();
        let ranking = document.forms['feeling']['input'].value

        dispatch({
            type:'ADD_FEELING',
            payload: ranking
        })
        history.push('/understandingpage')
    }

    return(
        <>
            <section>
                <h1> How are you feeling today?</h1>
            </section>
            <form name ="feeling" onSubmit={handleChange}>
                <input 
                    name="input"
                    type="number" 
                    min="0" 
                    max="5"
                    required
                > 
                </input>

                <button 
                    type="submit"
                >
                    Next
                </button>

            </form>
        </>
    );
}

export default FeelingsPage;