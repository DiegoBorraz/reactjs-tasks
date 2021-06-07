import axios from "axios";

export const getTasks = async () =>{
    return await axios.get("https://api-tasks-java.herokuapp.com/task/all");
}

export const updateTask = async (props) => {
    return await axios.put("https://api-tasks-java.herokuapp.com/task", props);
}