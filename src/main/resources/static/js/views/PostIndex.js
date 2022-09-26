import createView from "../createView.js";
import {getHeaders} from "../auth.js";
import createMovie from "./createMovie.js";

export default function PostIndex(props) {
    return `
    <div class="blue">
        <header>
            <h1>Movies Page</h1>
        </header>
        <main>
            <div>
               <h3 id="title"></h3>
               <h6 id="content"></h6>
               <h6 id="author"></h6>
            </div>
        </main>
        <a data-link href="/create-post">Add a movie</a><br>
    </div>   
    `;
}

export function postEvents() {
    async function posts(response) {
        let currentMovies = await response.json()
        console.log(response)
        console.log(currentMovies)

        let title = document.getElementById("title")
        let content = document.getElementById("content")
        let author = document.getElementById("author")

        let html = ` <div class="container">`;

        for (let i = 0; i < currentMovies.length; i++) {

            html +=  `
                          <div>
                        <table class="table table-success table-striped">
  <thead>
    
  </thead>
  <tbody>
  <th>Title</th>
   <th>Director</th>
    <th>Genre</th>
     <th>Rating</th>
    <tr class="table-active">
    
    </tr>
    <tr>
      
    </tr>
    <tr>
      <th scope="row">${currentMovies[i].title}</th>
      <th colspan="1" class="table-active">${currentMovies[i].director}</th>
      <th scope="row">${currentMovies[i].genre}</th>
      <th colspan="1" class="table-active" >${currentMovies[i].rating}</th>
    </tr>
        <input type="button" value="❌" style="width: 40px;border-radius: 20px" id="delete">
        <input type="button" value="✏️" style="width: 40px;border-radius: 20px; float: left;" id="edit">
  </tbody>
</table>

                       
            </div>
                `

        }
        author.innerHTML = html + `
                </div>
            `

            //
            // let getMovie = {
            //     method: "Get",
            //     headers: getHeaders(),
            //     body:JSON.stringify(searchBar)
            //
            // }
            //
            // fetch("http://localhost:8080/api/genres/search", getMovie)
            //     .then(function (response) {
            //         if (!response.ok) {
            //             console.log("movie was not created " + response.status)
            //         } else {
            //             console.log("movie created");
            //             createView('/movies');
            //         }
            //     });
            //
            //
            //
            //
            //





        let deleteButton = document.querySelectorAll("#delete");
        for (let i = 0; i < currentMovies.length; i++) {
            deleteButton[i].addEventListener("click", function (event){

                let deletePost = {
                    method: "Delete",
                    headers: getHeaders(),

                }

                let id = currentMovies[i].id

                fetch(`http://localhost:8080/api/movies/${id}`, deletePost)
                    .then(function(response) {
                        if(!response.ok) {
                            console.log("movies deletion error: " + response.status);
                        } else {
                            console.log("movie deleted");
                            createView('/movies');
                        }
                    });
            })
        }

        let editButton = document.querySelectorAll("#edit");
        for (let i = 0; i < currentMovies.length; i++) {
            editButton[i].addEventListener("click", function (event) {
                  createView('/edit');
                let newTitle = prompt("enter title")
                let newContent = prompt("enter content")

                let m = {
                    title: newTitle,
                    director: newContent,
                    genre: newTitle,
                    rating: newContent
                }



                let editPost = {
                    method: "PATCH",
                    headers: getHeaders(),
                    body: JSON.stringify(m)
                }
console.log(editPost);

console.log(currentMovies);


                let id = currentMovies[i].id;

                fetch(`http://localhost:8080/api/movies/${id}`, editPost)
                    .then(function (response) {
                        if (!response.ok) {
                            console.log("post editing error: " + response.status);
                        } else {
                            console.log("post updated");
                            createView('/movies');
                        }
                    });
//
            })
        }

        }
    let request = {
        method: "GET",
        headers: getHeaders(),
    }
        fetch("http://localhost:8080/api/movies", request)

        .then(posts)
        .catch(function(error){
            console.log("error" + error)
        })

}