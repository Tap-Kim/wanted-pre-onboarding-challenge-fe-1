import { css } from '@emotion/react';
import { btnDefault, inputDefault } from 'styles/global.style';
import { _flexbox, _flexDirection, _size } from 'styles/mixin.style';

export const Wrapper = css`
	${_flexbox()}
	${_flexDirection('column')}

	min-height: calc(100vh - 70px);
`;

export const InputArea = css`
	${_size('400px', '200px')}
	font-weight: 800;
`;

export const InputBox = css`
	${_flexbox()}

	& p {
		margin: 20px 0px;
		width: 200px;
	}

	${inputDefault}

	& input {
		${_size('500px', '30px')}
	}
`;

export const ButtonBox = css`
	${_flexbox()}
	${btnDefault}

	& :disabled {
		color: #e6e6e6;
		background-color: #919191ba;
		cursor: not-allowed;

		& :active,
		:hover {
			color: #e6e6e6;
			background-color: #919191ba;
			box-shadow: none;
		}
	}
`;
