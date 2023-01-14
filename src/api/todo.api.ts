import { ROUTE_URL } from 'consts/api.const';
import {
	TodoResponse,
	TodosRequest,
	TodosResponse,
} from 'interface/api.interface';
import core from './index.api';

export const getTodos = async () => {
	return core.get<TodosResponse>(`${ROUTE_URL.TODO}`);
};

export const deleteTodo = async (id: string) => {
	return core.delete<TodosResponse>(`${ROUTE_URL.TODO}/${id}`);
};

export const createTodo = async (param: TodosRequest) => {
	return core.post<TodoResponse>(`${ROUTE_URL.TODO}`, param);
};

export const updateTodo = async (param: TodosRequest) => {
	return core.put<TodosResponse>(`${ROUTE_URL.TODO}/${param.id}`, param);
};
