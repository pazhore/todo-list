import { baseApi } from "./base.service";

const baseUrl = "http://localhost:4000";

export const addTodo = async (body: any) => {
    return await baseApi("POST", `${baseUrl}/todolist`, body, "")
}
export const getTodo = async () => {
    return await baseApi("GET", `${baseUrl}/todolist`, "", "")
}
export const getTodoById = async () => {
    return await baseApi("GET", `${baseUrl}/todolist`, "", "")
}
export const deleteAllTodo = async (todo: { taskname: string; date: string; discription: string; priority: string; } | undefined) => {
    return await baseApi("DELETE", `${baseUrl}/todolist/${id}`, "", "")
}
export const deleteTodoById = async () => {
    return await baseApi("GET", `${baseUrl}/todolist`, "", "")
}
export const updateTodo = async () => {
    return await baseApi("PATCH", `${baseUrl}/todolist`, "", "")
}
