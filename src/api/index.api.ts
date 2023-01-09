import axios, { AxiosError, AxiosResponse } from 'axios';
import { REQUEST_METHOD } from 'consts/api.const';
import { ErrorResult } from 'interface/api.interface';

const instance = axios.create({
	baseURL: 'http://localhost:8080',
});

instance.defaults.headers.common['Content-Type'] =
	'application/json; charset=utf-8';

instance.interceptors.request.use(
	(config) => {
		const auth = localStorage.getItem('token')
			? { authorization: `${localStorage.getItem('token')}` }
			: {};
		return {
			...config,
			headers: {
				...config.headers,
				...auth,
			},
		};
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		switch (response.status) {
			case 200:
			case 201:
			case 202:
			case 204:
				return response;
			default:
				throw new Error(`${response.status}`);
		}
	},
	(error: AxiosError) => {
		if (axios.isAxiosError(error)) {
			const { response }: AxiosError = error;
			switch (response?.status) {
				case 403:
				case 400:
				case 409:
				case 500:
				default:
					return response?.data as ErrorResult;
			}
		}
		console.error('Request Error Occur.', error);
		return Promise.reject(new Error('Request Error Occur.'));
	}
);

const _request = async <T>(
	method: string,
	url: string,
	param: object = {},
	headers = {}
) => {
	try {
		const result: AxiosResponse<T> = await instance({
			method,
			url,
			data: param,
			headers,
			withCredentials: false,
		});

		if (result.statusText === 'OK') return result.data;
		throw result;
	} catch (error) {
		if (!(error instanceof Error)) return error as ErrorResult;
		throw error;
	}
};

const _get = <T>(url: string, param?: object) => {
	return _request<T>(REQUEST_METHOD.GET, url, param) as unknown as T;
};

const _post = <T>(url: string, body: object) => {
	return _request<T>(REQUEST_METHOD.POST, url, body) as unknown as T;
};

const _put = <T>(url: string, body?: object) => {
	return _request<T>(REQUEST_METHOD.PUT, url, body) as unknown as T;
};

const _patch = <T>(url: string, body?: object) => {
	return _request<T>(REQUEST_METHOD.PATCH, url, body) as unknown as T;
};

const _delete = <T>(url: string, param?: object) => {
	return _request<T>(REQUEST_METHOD.DELETE, url, param) as unknown as T;
};

const core = {
	get: _get,
	post: _post,
	put: _put,
	patch: _patch,
	delete: _delete,
};

export default core;
