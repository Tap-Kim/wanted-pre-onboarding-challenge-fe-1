import { AxiosResponse } from 'axios';
import { ROUTE_URL } from 'consts/api.const';
import { AuthRequest, AuthResponse } from 'interface/api.interface';
import core from './index.api';

export const login = async (param: AuthRequest) => {
	return core.post<AuthResponse>(`${ROUTE_URL.AUTH_URL}/login`, param);
};

export const singUp = async (param: AuthRequest) => {
	const data: AxiosResponse<AuthResponse> = await core.post(
		`${ROUTE_URL.AUTH_URL}/create`,
		param
	);
	return data;
};
