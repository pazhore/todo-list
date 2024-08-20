import { baseApi } from "./base.service";


const baseUrl = "https://jsonserver-9wo4.onrender.com";
export const addTodo = async (body: any) => {
    return await baseApi("POST", `${baseUrl}/todolist`, body, "")
}
export const getTodo = async () => {
    return await baseApi("GET", `${baseUrl}/todolist`, "", "")
}
export const getTodoById = async (id: string) => {
    return await baseApi("GET", `${baseUrl}/todolist/${id}`, "", "")
}
export const deleteTodoById = async (id: string) => {
        return await baseApi("DELETE", `${baseUrl}/todolist/${id}`, "", "")
}

