import { css } from '@emotion/react';
import { _size } from 'styles/mixin.style';

export const Wrapper = css`
	height: auto;
	min-height: calc(100vh - 70px);
	overflow: auto;

	align-items: center;

	padding: 0px 20px;
`;

export const Header = css`
	h1 {
	}

	.header_date {
		color: #4d4d4dab;
		font-weight: 600;
		margin: 0;
	}
`;

export const Section = css`
	p {
		font-size: large;
	}
`;
