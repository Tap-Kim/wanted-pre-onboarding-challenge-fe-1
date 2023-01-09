import { css } from '@emotion/react';
import { _flexbox, _flexDirection, _size } from 'styles/mixin.style';
import { TodoCommonStyle, TodoWidthStyle } from '../TodoListItem/style';

export const Wrapper = css`
	${_flexbox()}
	${_flexDirection('column')}
	${_size('100vw', ' auto')}
  min-height: calc(100vh - 70px);

	overflow: auto;
	text-align: center;
	background-color: #ffffff;

	font-weight: 800;
	font-size: larger;
`;

export const Header = css`
	${_flexbox()}
	/* ${_flexDirection('row')} */
	${TodoCommonStyle}
	${TodoWidthStyle}

	height: 20px;

	background-color: #0048ff82;
	color: #ffffff;

	text-align: center;
`;
