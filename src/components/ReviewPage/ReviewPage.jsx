

function ReviewPage() {
    let info = {
        feeling: 5,
        understanding: 1000,
        support: 1000,
        comments: 'blah', 
        flagged: true,
        date: '5-5-2005'
    }
    
    const feelingRating = () => {

    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: info
        })
        .then((response) => {
            console.log('post success');
        })
        .catch((err) => {
            console.error('oh no');
        });
    }        

    return(
        //gonna do a POST to the server here
        <h1>ReviewPage</h1>
    );
}

export default ReviewPage;