import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function UnderstandPage(){
    const dispatch = useDispatch();
    const history = useHistory();


    function handleChange(evt){
        evt.preventDefault();
        console.log('a thing', evt.target.value)
        dispatch({
            type:'ADD_UNDERSTANDING',
            payload: evt.target.value
        })
    }

    return(
        <>
            <section>
                <h1> How well are you understanding the content?</h1>
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
                    onClick={()=> history.push('/supportpage')}
                >
                    Next
                </button>

            </form>
        </>
    );
}

export default UnderstandPage;