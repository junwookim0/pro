import React from "react";
import data from "../test.json"

function su(){
    let imgdata = data.map((detail,index)=>{
            return(
                <div key={index}>
                    <img alt= "detail.name"src={detail.url}/>
                    <p>{detail.code}</p>
                    <p>{detail.name}</p>
                </div>
            );
        });
    return(
        <div>
            {imgdata}
        </div>
        );
    }
export default su;
