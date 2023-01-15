import { css } from '@emotion/react';

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
