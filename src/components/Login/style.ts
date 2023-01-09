import { css } from '@emotion/react';
import { _flexbox, _flexDirection, _size } from 'styles/mixin.style';

export const Wrapper = css`
	${_flexbox()}
	${_flexDirection('column')}


min-height: calc(100vh - 70px);
`;

export const InputArea = css`
	${_size('300px', '100px')}
	font-weight: 800;
`;

export const InputBox = css`
	${_flexbox()}

	& p {
		margin: 10px;
		width: 100px;
	}

	& input {
		${_size('200px', '20px')}
	}
`;

export const ButtonBox = css`
	${_flexbox()}

	border-radius: 10px;
	font-weight: 700;
	background-color: #dddddd;
	color: #414141;

	& button {
		${_size('200px', 'auto')}
		padding: 5px;

		&:disabled {
			background-color: #7b7b7b42;
			color: #5a5858e3;
		}
		&:active {
			background-color: #8b8b8b;
			border-bottom: 1px solid #000000;
			box-shadow: 0px 1.5px 1px 0px #686868;
			color: #ffffff;
		}
	}
`;
