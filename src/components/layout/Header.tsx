/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { modalState } from 'recoil/modal.recoil';
import { btnDefault } from 'styles/global.style';
import { _flexbox } from 'styles/mixin.style';

function Header() {
	const setModal = useSetRecoilState(modalState);
	const navigate = useNavigate();
	const user = localStorage.getItem('email');

	const pathName = window.location.pathname;
	const isLoginPage = pathName.indexOf('/login') > -1;

	const handleLogoClick = () => {
		const endPoint = user ? '/todo' : '/login';
		navigate(endPoint);
	};

	const handleAccountClick = () => {
		setModal({
			id: 'confirm',
			isOpen: true,
			message: '로그아웃 하시겠습니까?',
			handleOk: () => {
				localStorage.removeItem('email');
				localStorage.removeItem('token');
				navigate('/login');
			},
		});
	};

	const handlePage = () => {
		navigate(isLoginPage ? '/signup' : '/login');
	};

	return (
		<header css={Wrapper}>
			<h2 role="presentation" onClick={handleLogoClick}>
				ToDo List
			</h2>
			<strong>
				{user ? (
					<span role="presentation" onClick={handleAccountClick}>
						{`${user}님`}
					</span>
				) : (
					<button type="button" onClick={handlePage}>
						{isLoginPage ? 'SignUp' : 'Login'}
					</button>
				)}
			</strong>
		</header>
	);
}

export default Header;

const Wrapper = css`
	${_flexbox('space-between')}
	border-bottom: 1px solid rgb(167, 160, 160, 0.3);
	padding: 0px 5px;
	color: #000000;
	background-color: #a4a4a4;

	position: sticky;
	top: 0; /* 클래스 sticky인 요소 안에서 top값이 0이되면 sticky를 적용 */
	background: #ffffff;

	border: 0px 0px 1px 0px solid;

	& h2 {
		color: #0048ff;
	}
	& strong {
		color: #3859adc9;
		margin-right: 20px;
	}

	cursor: pointer;

	${btnDefault}
`;
