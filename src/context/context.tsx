
import React, { createContext, FC, useState } from 'react';
type TodoContext={
    list:Inputs[],
    setList: React.Dispatch<React.SetStateAction<Inputs[]>>,
    todo:Inputs|undefined,
    setTodo: React.Dispatch<React.SetStateAction<Inputs |undefined>>

}
type Inputs = {
    taskname: string
    date: string
    discription: string
    priority: string
    id:string
}
export const todoContext = createContext<TodoContext |undefined>(undefined);

export interface ContextProviderProps {
    children: React.ReactNode
}
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [list, setList] = useState<Inputs[]>([]);
    const [todo,setTodo]=useState<Inputs|undefined>()
    return (
        <>
            <todoContext.Provider value={{ list, setList,todo,setTodo}}>
                {children}
            </todoContext.Provider>
        </>
    );
};
export default ContextProvider;
