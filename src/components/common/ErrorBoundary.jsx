/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { _flexbox, _size } from 'styles/mixin.style';

class ErrorBoundary extends React.Component {
	state = { hasError: false, error: null };

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error,
		};
	}

	render() {
		console.log(this.state);
		if (this.state.hasError) {
			return <div css={Wrapper}>{this.state.error.message}</div>;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;

export const Wrapper = css`
	${_flexbox()}
	${_size('100vw', ' auto')}
  min-height: calc(100vh - 70px);

	overflow: auto;
	text-align: center;
	background-color: #ffffff;

	font-weight: 800;
	font-size: larger;
	color: red;
`;
