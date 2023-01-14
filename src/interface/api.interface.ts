import { ListItem } from './todo.interface';

export interface ErrorResult {
	details: string;
}
export interface AuthRequest {
	email: string;
	password: string;
}

export interface AuthResponse {
	details: unknown;
	message: string;
	token: string;
}

export interface TodosResponse {
	data: ListItem[] | null;
}

export interface TodoResponse {
	data: ListItem;
}

export interface TodosRequest {
	id?: string;
	title: string;
	content: string;
}
