import axios from "axios";

export const getTasks = async () =>{
    return await axios.get("https://api-tasks-java.herokuapp.com/task/all")
}