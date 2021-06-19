import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

function Main(props) {
    return (
      
            <div className="main-panel">
                {props.children}
            </div>
    );
}

export default Main;