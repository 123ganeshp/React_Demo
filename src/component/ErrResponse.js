import React from "react";

import Home from "./Home";



 const ErrResponse = () => {

    const message = window.sessionStorage.getItem("message");

   

    return(

        <div>

            <Home />

            <br></br>

            <div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded " style={{ display: 'flex', justifyContent: 'center' }}>

                <p>{message}</p>

            </div>

        </div>

    )

           

}



export default ErrResponse;