import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {

    return `
        <nav>
            <a href="/" data-link>Home</a>
            <a href="/movies" data-link>Movies</a>
        </nav>
        
    `;
}