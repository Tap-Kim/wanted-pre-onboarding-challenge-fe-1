/** @jsxImportSource @emotion/react */

import useAuth from 'hooks/useAuth';
import React, { useMemo } from 'react';
import validator from 'validator';
import { ButtonBox, InputArea, InputBox, Wrapper } from './style';

function SignUp() {
	const {
		email,
		password,
		passwordCheck,
		onChangeEmail,
		onChangePassword,
		onChangePasswordCheck,
		handleEnter,
		handleSignUp,
	} = useAuth();

	const isActive = useMemo(
		() =>
			!validator.isEmpty(email) &&
			!validator.isEmpty(password) &&
			!validator.isEmpty(passwordCheck),
		[email, password, passwordCheck]
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
				<div css={InputBox}>
					<p>Password Check</p>
					<input
						type="password"
						placeholder="비밀번호를 한번 더 입력하세요."
						value={passwordCheck}
						onChange={onChangePasswordCheck}
						onKeyDown={handleEnter}
					/>
				</div>
			</div>

			<div css={ButtonBox}>
				<button type="submit" disabled={!isActive} onClick={handleSignUp}>
					SignUp
				</button>
			</div>
		</section>
	);
}

export default SignUp;
