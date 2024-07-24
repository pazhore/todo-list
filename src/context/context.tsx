
import React, { createContext, FC, useState } from 'react';
export const todoContext = createContext<TodoContext>({
    list:[],
    setList([
        { taskname: ""
            date: ""
            discription: ""
            priority: ""}
    ])
})
type TodoContext={
    list:Inputs[],
    setList: React.Dispatch<React.SetStateAction<Inputs[]>>

}
type Inputs = {
    taskname: string
    date: string
    discription: string
    priority: string
}
export interface ContextProviderProps {
    children: React.ReactNode
}
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [list, setList] = useState<Inputs[]>([]);
    return (
        <>
            <todoContext.Provider value={{ list, setList }}>
                {children}
            </todoContext.Provider>
        </>
    );
};
export default ContextProvider;