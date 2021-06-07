import React , {useState, useEffect }from 'react';
import Line from "../Line/Line";
import { useTask } from "../../Context/TaskContext"
import { getTasks } from "../../Services/TaskService";

export default function List(){
    const {tasks, setTasks } = useTask();
    
    useEffect(()=>{
        getTasks().then(response => {
            setTasks(response.data);
        }).catch(error => {
            console.log("ERROR === ", error)
        });
    },[]);

    return (
        <div>
            {tasks.map(item => (
                <div key={item.id}>
                    <Line props={item} />
                </div>
                
            ))}
        </div>
        
    );
}
