import React, { createContext, useState } from 'react';


export const Context = createContext();

export const TaskProvider = ({ children })=> {
    const [ tasks, setTasks ] = useState([]);
    return (
        <Context.Provider value={{tasks, setTasks}}>
            {children}
        </Context.Provider>
    )
}

export const useTask = () => React.useContext(Context);