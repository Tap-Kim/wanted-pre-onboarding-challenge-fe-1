import { css } from '@emotion/react';
import { borderPadding, btnDefault, inputDefault } from 'styles/global.style';
import { _flexDirection, _size } from 'styles/mixin.style';

export const Wrapper = css`
	height: auto;
	min-height: calc(100vh - 70px);
	overflow: auto;

	align-items: center;

	padding: 0px 20px;

	.title {
		margin: 20px 0px;
		${_flexDirection('row')}
		justify-content: space-between;
		align-items: center;

		${btnDefault}
	}

	${inputDefault}
	textarea {
		resize: none;
		${_size('98%', '100vh')}
		border: none;
		${borderPadding}
	}
`;

export const Header = css`
	.header_date {
		color: #4d4d4dab;
		font-weight: 600;
		margin: 0;
	}
`;

export const Section = css`
	p {
		font-size: large;
	}
`;
