import React from 'react';
import "./styles.css"

export default function Line({props}){
    return (
        <div className="Line">
            <div>
                <div className="Title">
                    {props.title}
                </div>
                <div className="Align">    
                    <div className="Description">
                        {props.description}
                    </div>
                    <div >
                        <button className="Button Editar" type="button">Editar</button>
                    </div>
                    <div >
                        <button className="Button Deletar" type="button">Deletar</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
