// Code Keypad Component Here
import react from "react";

function Keypad (){
    function logChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={logChange} type = "password"></input>
        </div>
    )
}

export default Keypad;