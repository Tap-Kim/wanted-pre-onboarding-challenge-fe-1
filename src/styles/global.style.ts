import { css } from '@emotion/react';
import { _size, _hoverShadow } from './mixin.style';

export const globalStyles = css`
	html,
	body {
		margin: 0;
		height: 100%;
		font-family: 'AvenirStd';
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Roboto', Arial;
	}

	*:focus {
		outline-style: solid;
		outline-offset: -1px;
	}
`;

type ThemaStylesTypes = 'thema-color';
export const themaStyles: Record<ThemaStylesTypes, string> = {
	'thema-color': '#0048ff82',
};

export const btnDefault = css`
	button {
		${_size('90px', '40px')}

		background-color: ${themaStyles['thema-color']};
		border-radius: 5px;
		border: none;
		color: #ffffff;

		font-size: medium;
		font-weight: 600;
		margin: 0px 5px;

		cursor: pointer;

		&:hover {
			background: #0048ffe6;
			${_hoverShadow}
			color: #ffffff;
		}

		&:active {
			color: #000;
			background-color: #ffffff;
			box-shadow: 0px 2px 2px 0px #686868;
		}
	}
`;

export const borderPadding = css`
	border-bottom: 1px solid #0048ff;
	background-color: #b3c3db24;
	border-radius: 10px;
	padding: 5px;
`;
export const inputDefault = css`
	input,
	textarea {
		${_size('70%', '30px')}
		border: none;
		${borderPadding}
	}
`;
