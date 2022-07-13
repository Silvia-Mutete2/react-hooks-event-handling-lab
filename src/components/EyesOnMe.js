import React from "react";

 function EyesOnMe(){
    return (
        <div>
        <React.Fragment>
            <button onBlur={() => console.log('Hey! Eyes on me!')} 
                     onFocus={() => console.log('Good!')}>
                         Eyes on me
            </button>
        </React.Fragment>
        </div>
    )
}

 export default EyesOnMe
