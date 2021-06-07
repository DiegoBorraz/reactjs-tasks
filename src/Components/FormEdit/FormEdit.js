import React, { useState, useEffect } from 'react';
import "./styles.css"
import { useForm } from "react-hook-form";
import { updateTask, getTasks } from "../../Services/TaskService";
import { useTask } from "../../Context/TaskContext"


export default function FormEdit({ task, close }){
    const { setTasks } = useTask();
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(()=>{
        setTitle(task.title)
        setDescription(task.description);
    },[])

    const onClose = ()=>{
        close();
    }

    const onSubmit = (data) => {
        let formData = {
            id: task.id,
            title: data.title,
            description: data.description
        }
        updateTask(formData).then(resp => {
            getTasks().then(response => {
                setTasks(response.data);
            }).catch(error => {
                console.log("Erro ao listar pelo editar  === ", error)
            });
            onClose();
        }).catch(error => {
            console.log("Erro no updateTask = ", error)
        })
    }

    return (
        <div className="FormEdit-Background">
            <div className="FormEdit-Modal">
                <div className="FormEdit-item1">
                    <a className="FormEdit-Title">Editar Tarefa</a>
                    <div onClick={()=> onClose()} className="FormEdit-Close">x</div>                     
                </div>
                <div className="FormEdit-Children">
                    <form onSubmit={handleSubmit(onSubmit)} className="FormEdit-Form">
                        <label>Titulo</label>
                        <input id="title" type="text" defaultValue={title}  {...register("title", { required: true })} />
                        {errors.title && <span>Campo não pode ficar vazio.</span>}

                        <label>Descrição</label>
                        <textarea id="description" defaultValue={description} rows="5" {...register("description", { required: true })} />
                        {errors.description && <span>Campo não pode ficar vazio.</span>}
                        <button type="submit" >Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
