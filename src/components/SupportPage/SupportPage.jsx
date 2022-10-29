import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function SupportPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(evt){
        evt.preventDefault();
        console.log('a thing', evt.target.value)
        dispatch({
            type:'ADD_SUPPORT',
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
                    type="number" 
                    min="0" 
                    max="5"

                    required
                > 
                </input>

                <button 
                    onClick={()=> history.push('/commentspage')}
                >
                    Next
                </button>

            </form>
        </>
    );
}

export default SupportPage;