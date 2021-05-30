import React from 'react';
import "./styles.css"

export default function Line(){

    return (
        <div className="Line">
            <div>
                <div className="Title">
                    Titulo
                </div>
                <div className="Align">    
                    <div className="Description">
                        Descrição
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
