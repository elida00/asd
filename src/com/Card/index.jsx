import React from "react";
import akti from "./module.css"
export const Card = ({name,col}) =>{
    return(
        <div style={{backgroundColor:col}} className={akti.help}>
            <h3>{name}</h3>
        </div>
    )
}