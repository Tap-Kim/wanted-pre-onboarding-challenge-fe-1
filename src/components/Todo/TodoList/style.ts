import { css } from '@emotion/react';
import { _flexbox, _flexDirection, _size } from 'styles/mixin.style';
import { TodoCommonStyle, TodoWidthStyle } from '../TodoListItem/style';

export const Wrapper = css`
	align-items: center;
	${_flexDirection('column')}
	${_size('100vw', 'auto')}
  min-height: calc(100vh - 70px);

	overflow: auto;
	text-align: center;
	background-color: #ffffff;

	font-weight: 800;
	font-size: larger;

	.float_btn {
		position: fixed;
		${_flexbox()}
		${_size('60px')}
		bottom: 40px;
		right: 40px;
		background-color: #0c9;
		color: #fff;
		border-radius: 50px;
		text-align: center;
		box-shadow: 2px 2px 3px #999;

		& button {
			${_size('100%')}
			border-radius: 50px;
			border: none;
			background-color: #fff0;

			font-size: xx-large;
			font-weight: 800;
			color: #ffffff;
			border: none;

			:active {
				background-color: #fff0;
			}
		}
	}
`;

export const Header = css`
	${_flexbox()}
	${TodoCommonStyle}
	${TodoWidthStyle}

	height: 20px;
	background-color: #0048ff82;

	text-align: center;
	color: #ffffff;

	transition: all 0.2s;
`;
