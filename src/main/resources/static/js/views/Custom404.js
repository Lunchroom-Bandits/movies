import createView from "../createView.js";


export default function custom404(props) {


    return`
        <style>
            body {
  background-color: black;
  font-family: cursive;
}


img {
    
    align-content: center;
    justify-content: center;
    background-attachment: fixed;
    background-size: 225vh;
}
.error {
  font-size: 80px;
  color: #4dfff9;
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #7aff4d, 0 0 20px #4dfff9, 0 0 30px #46e810, 0 0 40px #46e810, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  
  to {
    text-shadow: 0 0 20px #46e810, 0 0 30px #001fe6, 0 0 40px #0ad5bb, 0 0 50px #7aff4d, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
        
        </style>
        <body>
         <a href="/create-post" style="font-weight: bold; font-size: xx-large"  data-link>Try again</a>
            <div id="main" style="font-weight: bold; font-size: xx-large">
           
                <div class="error">
                    <h1 style="font-weight: bold; font-size: xxx-large">Error 404!</h1>
                </div>
                    <div>
                        <img src="js/views/partials/h.gif" style="width: 100%">
                    </div>
           </div>    
            
        </body>    
    `
}