import React, { useState, useEffect } from 'react';
import "./styles.css"

export default function Modal({title, children, open}){
    const [getOpen, setOpen] = useState(open);
    useEffect(()=>{
        setOpen(open)
    },[open])
    const onClose = ()=>{
        setOpen(false);
    }
    return getOpen ? (
        <div className="Modal-Background">
            <div className="Modal">
                <div className="Modal-item1">
                    <a className="Modal-Title"> {title} </a>
                    <div onClick={()=> onClose()} className="Modal-Close">x</div>                     
                </div>
                <hr/>
                <div className="Children">
                    {children}
                </div>
            </div>
        </div>
    ): null;
}
