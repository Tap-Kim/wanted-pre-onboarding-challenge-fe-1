import { css } from '@emotion/react';
import {
	_position,
	_size,
	_inlineblock,
	_flexbox,
	_flexDirection,
} from 'styles/mixin.style';

export const Wrapper = css`
	${_flexbox()}
	${_position('fixed', '0', '0', '0', '0')}
	${_size('100%')}
  z-index: 9998;
	overflow: auto;
	text-align: center;
	background-color: #4c4c4cab;

	&.behind {
		background-color: transparent;
	}
	&:before {
		${_inlineblock('middle')}
		height: 100%;
	}
`;

export const Content = css`
	${_flexbox()}
	${_flexDirection('column')}
	${_size('400px', 'auto')}
  
	z-index: 9999;
	padding: 20px 0px;
	border-radius: 10px;

	background-color: #ffffff;
	overflow: auto;

	color: #000;

	& h2 {
	}
	& p {
	}
`;

export const ButtonArea = css`
	${_flexbox()}
	${_flexDirection('row')}
	${_size('150px', '70px')}

	& button {
		${_size('200px', '35px')}
		outline: #333366 0.1px;
		color: #ffffff;
		font-size: medium;
		font-weight: 800;

		&:active {
			background-color: #8b8b8b;
			border-bottom: 2px solid #000000;
			box-shadow: 0px 2px 2px 0px #686868;
		}
	}

	.btn_ok {
		background-color: #26262682;
		border-radius: 5px;
		border: none;
	}

	.btn_cancel {
	}
`;
