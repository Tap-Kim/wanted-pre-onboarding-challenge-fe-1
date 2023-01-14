import { css } from '@emotion/react';
import {
	_flexbox,
	_flexDirection,
	_inlineblock,
	_position,
	_size,
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
	${_size('500px', 'auto')}
  
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
