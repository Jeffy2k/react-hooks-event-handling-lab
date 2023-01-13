// Code EyesOnMe Component Here
import react from "react";

function EyesOnMe() {
    function logBlur(){
        console.log("Hey! Eyes on me!");
    }
    function logFocus(){
        console.log("Good!");
    }
    return ( 
       < button onBlur={logBlur} onFocus={logFocus}> Eyes on me</button>
     );
}

export default EyesOnMe;