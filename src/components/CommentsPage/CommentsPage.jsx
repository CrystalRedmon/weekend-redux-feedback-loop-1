import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function CommentsPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(evt){
        evt.preventDefault();
        console.log('a thing', evt.target.value)
        dispatch({
            type:'ADD_COMMENTS',
            payload: evt.target.value
        })
        
    }

    return(
         <>
            <section>
                <h1> How well are you being supported?</h1>
            </section>
            <form>
                <input 
                    onChange={handleChange}
                    type="text" 
                    min="0" 
                    max="5"
                    required
                > 
                </input>

                <button 
                    onClick={()=> history.push('/reviewpage')}
                >
                    Next
                </button>

            </form>
        </>
    );
}

export default CommentsPage;