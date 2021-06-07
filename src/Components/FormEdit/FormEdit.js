import React, { useState, useEffect } from 'react';
import "./styles.css"

export default function FormEdit({title, children, open}){
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
                    <div className="FormEdit">
                        <label>Titulo</label>
                        <input id="title" type="text" />

                        <label>Descrição</label>
                        <textarea id="description"/>

                        <button>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    ): null;
}
