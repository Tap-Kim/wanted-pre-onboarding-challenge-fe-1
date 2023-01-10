/** @jsxImportSource @emotion/react */
import { login } from 'api/auth.apis';
import { ErrorResult } from 'interface/api.interface';
import React, { ChangeEvent, KeyboardEvent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { modalState } from 'recoil/modal.recoil';
import { ButtonBox, InputArea, InputBox, Wrapper } from './style';

function Login() {
	const setModal = useSetRecoilState(modalState);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleLogin();
			e.currentTarget.blur();
		}
	};

	const handleLogin = async () => {
		const result = await login({ email, password });
		if (result.token) {
			const { token } = result;
			localStorage.setItem('token', token);
			navigate('/todo');
			return;
		}

		setModal({
			isOpen: true,
			message: (result as ErrorResult).details,
		});
	};

	const isActive = useMemo(
		() => email !== '' && password !== '',
		[email, password]
	);

	return (
		<section css={Wrapper}>
			<div css={InputArea}>
				<div css={InputBox}>
					<p>Email</p>
					<input
						type="text"
						placeholder="이메일을 입력하세요."
						value={email}
						onChange={onChangeEmail}
						onKeyDown={handleEnter}
					/>
				</div>
				<div css={InputBox}>
					<p>Password</p>
					<input
						type="password"
						placeholder="비밀번호를 입력하세요."
						value={password}
						onChange={onChangePassword}
						onKeyDown={handleEnter}
					/>
				</div>
			</div>

			<div css={ButtonBox}>
				<button type="submit" disabled={!isActive} onClick={handleLogin}>
					Login
				</button>
			</div>
		</section>
	);
}

export default Login;
