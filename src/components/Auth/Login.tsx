/** @jsxImportSource @emotion/react */
import useAuth from 'hooks/useAuth';
import React, { useMemo } from 'react';
import { ButtonBox, InputArea, InputBox, Wrapper } from './style';

function Login() {
	const {
		email,
		password,
		onChangeEmail,
		onChangePassword,
		handleEnter,
		handleLogin,
	} = useAuth();

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
