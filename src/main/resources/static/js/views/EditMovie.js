import createView from "../createView.js";
import {getHeaders} from "../auth.js";

export default function editMovie(prop) {
    return `
          <h2 style="margin: 10px">Edit a movie</h2>
        <form>
            <input type="text" placeholder="enter title" style="margin-top: 50px;margin-bottom: 20px" id="title"><br>
             <input type="text" placeholder="enter director" style="margin-top: 50px;margin-bottom: 20px" id="director"><br>
              <input type="text" placeholder="enter rating" style="margin-top: 50px;margin-bottom: 20px" id="rating"><br>
               <input type="text" placeholder="enter genre" style="margin-top: 50px;margin-bottom: 20px" id="genre"><br>
            <input type="button" value="Save" id="save-button">
        </form>
    `
}

export function editMovieEvent() {

}