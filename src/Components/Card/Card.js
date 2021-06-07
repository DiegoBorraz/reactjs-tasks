import React, { useState, useEffect } from 'react';
import "./styles.css"


export default function Card({children, open}){
    const [close, setClose ] = useState(false);

    useEffect(()=>{
        setClose(open);
    },[])

    return close ? null : (
        <div className="Card">
            <button onClick={()=> setClose(true)} className="Close">X</button>
            <div className="Children">
                {children}
            </div>
        </div>
        
    );
}
