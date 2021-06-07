import React, { useState, useContext } from 'react';
import "./styles.css"
import FormEdit from "../FormEdit/FormEdit"

export default function Line({props}){
    const [edit, setEdit] = useState(false);
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
                            <button onClick={()=> setEdit(!edit)} className="Button Editar" type="button">Editar</button>
                        </div>
                        <div >
                            <button className="Button Deletar" type="button">Deletar</button>
                        </div>
                    </div>
                </div>
                { edit && ( <FormEdit  task={props} close={()=>setEdit(false)} />)}
            </div>
    );
}
