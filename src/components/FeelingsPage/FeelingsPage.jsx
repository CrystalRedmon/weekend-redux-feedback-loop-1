import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function FeelingsPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    const feelingRating = () => {

    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        
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