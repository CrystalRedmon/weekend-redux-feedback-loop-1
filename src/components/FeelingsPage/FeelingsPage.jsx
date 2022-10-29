import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function FeelingsPage(){
    const dispatch = useDispatch();
    const history = useHistory();


    function handleChange(evt){
        evt.preventDefault();
        console.log('a thing', evt.target.value)
        dispatch({
            type:'ADD_FEELING',
            payload: evt.target.value
        })
        // history.push('/understandingpage')
    }

    return(
        <>
            <section>
                <h1> How are you feeling today?</h1>
            </section>
            <form>
                <input 
                    onChange={handleChange}
                    type="number" 
                    min="0" 
                    max="5"

                    required
                > 
                </input>

                <button 
                    onClick={()=> history.push('/understandingpage')}
                >
                    Next
                </button>

            </form>
        </>
    );
}

export default FeelingsPage;