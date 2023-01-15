/* eslint-disable no-useless-return */
import { login, singUp } from 'api/auth.apis';
import { ErrorResult } from 'interface/api.interface';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'utils/toast';
import { loginValidator } from 'utils/vaildator';

const useAuth = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');

	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const onChangePasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordCheck(e.target.value);
	};

	const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			if (passwordCheck) {
				handleSignUp();
			} else {
				handleLogin();
			}
			e.currentTarget.blur();
		}
	};

	const handleLogin = async () => {
		const result = await login({ email, password });
		if (result.token) {
			const { token } = result;
			localStorage.setItem('token', token);
			localStorage.setItem('email', email);

			toast({ text: '로그인 성공', status: 'success' });
			navigate('/todo');
			return;
		}

		toast({ text: (result as ErrorResult).details, status: 'error' });
	};

	const handleSignUp = async () => {
		const valid = loginValidator({ email, password, passwordCheck });
		if (!valid.isValid) {
			toast({ text: valid.message ?? '에러', status: 'error' });
			return;
		}

		const result = await singUp({ email, password });
		if (result.token) {
			toast({ text: '계정 생성에 성공하였습니다!', status: 'success' });
			navigate('/login');
			return;
		}

		toast({ text: (result as ErrorResult).details, status: 'error' });
	};

	return {
		email,
		password,
		passwordCheck,
		onChangeEmail,
		onChangePassword,
		onChangePasswordCheck,
		handleEnter,
		handleLogin,
		handleSignUp,
	};
};

export default useAuth;
