import { css } from '@emotion/react';
import { _flexbox, _size } from 'styles/mixin.style';

export const Wrapper = css`
	${_flexbox()}
	${_size('100vw', ' auto')}
  min-height: calc(100vh - 70px);

	overflow: auto;
	text-align: center;
	background-color: #ffffff;

	font-weight: 800;
	font-size: larger;
`;
