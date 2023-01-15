import { css } from '@emotion/react';
import {
	_size,
	_flexbox,
	_flexDirection,
	_hoverShadow,
} from 'styles/mixin.style';

const borderPadding = css`
	border-bottom: 1px solid #0048ff;
	background-color: #b3c3db24;
	border-radius: 10px;
	padding: 5px;
`;

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

		button {
			${_size('90px', '50px')}

			background-color: #0048ff82;
			border-radius: 5px;
			border: none;
			color: #ffffff;

			font-size: medium;
			font-weight: 600;
			margin: 0px 5px;

			cursor: pointer;

			&:hover {
				background: #0048ffe6;
				${_hoverShadow}
				color: #ffffff;
			}

			&:active {
				background-color: #8b8b8b;
				border-bottom: 2px solid #000000;
				box-shadow: 0px 2px 2px 0px #686868;
			}
		}
	}

	input,
	textarea {
		${_size('70%', '30px')}
		border: none;
		${borderPadding}
	}

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
