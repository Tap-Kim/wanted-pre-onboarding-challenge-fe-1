import { css } from '@emotion/react';
import { themaStyles } from 'styles/global.style';
import {
	_flexbox,
	_flexDirection,
	_size,
	_hoverShadow,
} from 'styles/mixin.style';

export const Wrapper = css`
	${_flexbox()}
	${_flexDirection('row')}
	${_size('200px', '70px')}

& button {
		${_size('200px', '35px')}
		outline: #333366 0.1px;
		color: #ffffff;
		font-size: medium;
		font-weight: 600;
		margin: 0px 5px;

		&:active {
			background-color: #8b8b8b;
			border-bottom: 2px solid #000000;
			box-shadow: 0px 2px 2px 0px #686868;
		}
	}

	.btn_ok {
		background-color: ${themaStyles['thema-color']};
		border-radius: 5px;
		border: none;

		&:hover {
			background: #0048ffe6;
			${_hoverShadow}
			color: #ffffff;
		}
	}

	.btn_cancel {
		background-color: #ffffff;
		border-radius: 5px;
		border: 1.5px solid #515151;
		color: #515151;

		&:hover {
			border: none;
			background: #c3c3c3b3;
			${_hoverShadow}
			color: #ffffff;
		}
	}
`;
