import { baseApi } from "./base.service";

const baseUrl ="http://localhost:4000" ;

export const addTodo = async (body: any) => {
    return await baseApi("POST", `${baseUrl}/todolist`, body, "")
}
export const getTodo = async () => {
    return await baseApi("GET", `${baseUrl}/todolist`,"","")
}
