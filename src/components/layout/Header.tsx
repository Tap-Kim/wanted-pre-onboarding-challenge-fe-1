/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { _flexbox } from 'styles/mixin.style';

function Header() {
	return (
		<header
			css={css`
				${_flexbox('space-between')}
				border-bottom: 1px solid rgb(167, 160, 160, 0.3);
				padding: 0px 5px;
				color: #000000;
				background-color: #a4a4a4;

				& h2 {
					color: #ffffff;
				}
			`}
		>
			<h2>Pre-Test</h2>
		</header>
	);
}

export default Header;
