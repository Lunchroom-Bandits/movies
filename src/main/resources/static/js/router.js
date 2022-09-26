import Home from "./views/Home.js";
import PostIndex, {postEvents} from "./views/PostIndex.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import createMovie, {createPostEvent} from "./views/createMovie.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import custom404 from "./views/Custom404.js";
import editMovie, {editMovieEvent} from "./views/EditMovie.js";


/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },

        '/custom404': {
            returnView: custom404,
            state: {},
            uri: '/custom404',
            title: "custom404",
            backgroundColor: 'black'

        },

        '/edit': {
            returnView: editMovie,
            state: {
                movies: '/api/movies',
            },
            uri: '/edit',
            title: "Edit",
            viewEvent: editMovieEvent
        },


        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/logout',
            title: "Logout",
            viewEvent: LogoutEvents
        },

        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/movies': {
            returnView: PostIndex,
            state: {
                movies: '/api/movies',
            },
            uri: '/movies',
            title: 'All Posts',
            viewEvent: postEvents
        },
        '/about': {
            returnView: About,
            state: {},
            uri: '/about',
            title: 'About',
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },

        "/create-post": {
            returnView: createMovie,
            state: {},
            uri: location.pathname,
            title: "Create post",
            viewEvent: createPostEvent
        }


    };

    return routes[URI];
}

