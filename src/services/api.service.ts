import { baseApi } from "./base.service";

const baseUrl ="http://localhost:4000" ;

export const addTodo = async (body: any) => {
    return await baseApi("POST", `${baseUrl}/todolist`, body, "")
}