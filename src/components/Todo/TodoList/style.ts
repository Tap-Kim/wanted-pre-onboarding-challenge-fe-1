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

	.nav_area {
		${_size('100vw', '50px')}
		${_flexbox('end')}
		padding: 10px;

		& button {
			background-color: #eb510d94;
			margin-right: 60px;
			border: none;
			border-radius: 30px;
			${_size('100px', '35px')}

			font-size: medium;
			font-weight: 800;
			color: #ffffff;

			:active {
				background-color: #b33700e6;
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
`;
