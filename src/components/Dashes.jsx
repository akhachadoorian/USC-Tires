import React, { useState, useEffect } from "react";
 

function Dashes({ numDashes }) {


    return (
        <div className="dashes">
            {(() => {
            const arr = [];
            for (let i = 0; i < numDashes; i++) {
                arr.push(
                    <div className="dash" key={i}>
                    </div>
                );
            }
            return arr;
        })()}
        </div>
    )
}

export default Dashes;