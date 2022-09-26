import createView from "../createView.js";
import {getHeaders} from "../auth.js";
export {createMovie}

export default function createMovie(props) {
    return `

        <h2 style="margin: 10px">Add a movie</h2>
        <form>
            <input type="text" placeholder="enter title" style="margin-top: 50px;margin-bottom: 20px" id="title"><br>
             <input type="text" placeholder="enter director" style="margin-top: 50px;margin-bottom: 20px" id="director"><br>
              <input type="text" placeholder="enter rating" style="margin-top: 50px;margin-bottom: 20px" id="rating"><br>
               <input type="text" placeholder="enter genre" style="margin-top: 50px;margin-bottom: 20px" id="genre"><br>
            <input type="button" value="Save" id="save-post-button">
        </form>

        <h1 id="posts"></h1>
    `
}

export function createPostEvent() {
    let saveButton = document.getElementById("save-post-button");
    saveButton.addEventListener("click", function (event) {
        let newTitle = document.getElementById("title").value;
        let newRating = document.getElementById("rating").value;
        let newDirector = document.getElementById("director").value;
        let newGenre = document.getElementById("genre").value;
        console.log({title: newTitle, rating: newRating})

        let createMovie = {
            title: newTitle,
            rating : newRating,
            director: newDirector,
            genre: newGenre
        }

        if (newTitle.trim().length < 1|| newRating.trim().length < 1 || newDirector.trim().length < 1) {
            alert("One or more fields are empty")
           createView('/custom404')
            return;

        }

        let newMovie = {
            method: "POST",
            headers: getHeaders(),
            body:JSON.stringify(createMovie)
        }

        console.log(newMovie);

        fetch("http://localhost:8080/api/movies", newMovie)
            .then(function (response) {
                if (!response.ok) {
                    console.log("movie was not created " + response.status)
                } else {
                    console.log("movie created");
                    createView('/movies');
                }
            });




    })
}
