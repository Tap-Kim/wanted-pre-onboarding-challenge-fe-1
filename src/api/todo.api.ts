import { ROUTE_URL } from 'consts/api.const';
import {
	TodoResponse,
	TodosRequest,
	TodosResponse,
} from 'interface/api.interface';
import core from './index.api';

export const getTodo = (id: string) =>
	core.get<TodoResponse>(`${ROUTE_URL.TODO}/${id}`);
export const getTodos = () => core.get<TodosResponse>(`${ROUTE_URL.TODO}`);
export const deleteTodo = (id: string) =>
	core.delete<TodosResponse>(`${ROUTE_URL.TODO}/${id}`);
export const createTodo = (param: TodosRequest) =>
	core.post<TodoResponse>(`${ROUTE_URL.TODO}`, param);
export const updateTodo = (param: TodosRequest) =>
	core.put<TodosResponse>(`${ROUTE_URL.TODO}/${param.id}`, param);
