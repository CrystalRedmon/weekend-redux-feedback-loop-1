import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function UnderstandPage(){
    const dispatch = useDispatch();
    const history = useHistory();


    function handleChange(evt){
        evt.preventDefault();
        let ranking = document.forms['understandingForm']['input'].value

        dispatch({
            type:'ADD_UNDERSTANDING',
            payload: ranking
        })
        history.push('/supportpage')
    }

    return(
        <>
            <section>
                <h1> How well are you understanding the content?</h1>
            </section>
            <form name ="understandingForm" onSubmit={handleChange}>
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

export default UnderstandPage;