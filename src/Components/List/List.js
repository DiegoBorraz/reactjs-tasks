import React , {useState, useEffect }from 'react';
import Line from "../Line/Line";
import axios from "axios";

export default function List(){
    const [ tasks, setTasks ] = useState([]);
    useEffect(()=>{
        axios.get("https://api-tasks-java.herokuapp.com/task/all").then(
            response => {
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
