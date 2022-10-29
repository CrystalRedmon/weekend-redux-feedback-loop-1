import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function SupportPage(){
    const dispatch = useDispatch();
    const history = useHistory();


    function handleChange(evt){
        evt.preventDefault();
        let ranking = document.forms['supportForm']['input'].value;

        dispatch({
            type:'ADD_SUPPORT',
            payload: ranking
        });
        history.push('/commentspage');
    }

    return(
        <>
            <section>
                <h1> How well are you being supported?</h1>
            </section>
            <form name="supportForm" onSubmit={handleChange}>
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

export default SupportPage;