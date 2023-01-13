/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { _flexbox } from 'styles/mixin.style';

function Header() {
	const user = localStorage.getItem('email');
	return (
		<header
			css={css`
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
			`}
		>
			<h2>ToDo List</h2>
			<strong>
				{user}
				{user && '님'}
			</strong>
		</header>
	);
}

export default Header;
