import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function CommentsPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(evt){
        evt.preventDefault();
        let comment = document.forms['commentsForm']['input'].value;

        dispatch({
            type:'ADD_COMMENTS',
            payload: comment
        })
        history.push('/reviewpage')
    }

    return(
         <>
            <section>
                <h1> How well are you being supported?</h1>
            </section>
            <form name="commentsForm" onSubmit={handleChange}>
                <input 
                    name="input"
                    type="text" 
                    min="0" 
                    max="5"
                
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

export default CommentsPage;