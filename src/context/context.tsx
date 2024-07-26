
import React, { createContext, FC, useState } from 'react';
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
export const todoContext = createContext<TodoContext |undefined>(undefined);

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
