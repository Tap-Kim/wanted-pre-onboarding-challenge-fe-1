import { _flexbox, _flexDirection } from 'styles/mixin.style';
import { css } from '@emotion/react';

export const Wrapper = css`
	${_flexbox()}
	${_flexDirection('column')}
	.content-wrapper {
		${_flexbox('space-between')}
		margin: 10px 0px;
	}

	span {
		width: 50px;
		margin-right: 20px;
		font-weight: 800;
	}
	input {
		width: 300px;
		border: 0.5px solid #0048ff;
		border-radius: 10px;
		padding: 5px;
		height: 30px;
	}
	textarea {
		width: 300px;
		border: 0.5px solid #0048ff;
		border-radius: 10px;
		padding: 5px;
		height: 160px;
		resize: none;
	}
`;
