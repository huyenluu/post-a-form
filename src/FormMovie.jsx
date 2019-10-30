import React, {useState} from 'react';

function FormMovie () {

    const [state, setState] =useState({
        title: '',
        poster: '',
        comment: '',
    })

    function onChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    function submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
          };
        const url = " https://post-a-form.herokuapp.com/api/movies";

        fetch(url, config)
        .then(res => res.json())
            .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`your favorite movie is added with the ID ${res.id}!`);

            }
            }).catch(e => {
            console.error(e);
            alert('Error');
            });
    }
        
    return (

    <div className="FormEmployee">
        <h1> Sharing is caring!</h1>

        <form onSubmit={submitForm}>
        <fieldset>
            <legend>Your favorite movie</legend>
            <div className="form-data">
            <label htmlFor= "title">Title </label>
            <input
                type="text"
                id= "title"
                name=   "title"
                onChange={onChange}
                value={state.title}
            />
            </div>

            <div className="form-data">
            <label htmlFor="poster">Poster</label>
            <input
                type="text"
                id="poster"
                name="poster"
                onChange={onChange}
                value={state.poster}
            />
            </div>

            <div className="form-data">
            <label htmlFor="comment">Comment</label>
            <textarea
                type="textarea"
                rows="4" 
                cols="40"
                id="comment"
                name="comment"
                onChange={onChange}
                value={state.comment}
            />
            </div>
            <hr />
            <div className="form-data">
            <input type="submit" value="Send" />
            </div>
        </fieldset>
        </form>
    </div>
)
}

export default FormMovie;