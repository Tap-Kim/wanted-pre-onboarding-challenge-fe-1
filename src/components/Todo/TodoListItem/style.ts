import { css } from '@emotion/react';
import { _flexbox, _size } from 'styles/mixin.style';

export const TodoCommonStyle = css`
	${_size('80vw', '50px')}
	padding: 20px;
	margin: 5px;

	font-weight: 800;
	font-size: larger;

	border-radius: 15px;
`;

export const TodoWidthStyle = css`
	.todo_title {
		width: 150px;
	}
	.todo_content {
		width: 350px;
	}
	.todo_create_at {
		width: 130px;
	}
	.todo_update_at {
		width: 130px;
	}

	.button {
		background-color: aliceblue;
	}
`;

export const ItemWrapper = css`
	${TodoCommonStyle}
	${_flexbox()}
	${TodoWidthStyle}


	background-color: #ffc883b0;

	cursor: pointer;

	li {
		:active {
			background-color: #ffd583f5;
			color: #ffffff;
			border-bottom: 2px solid #000000;
			box-shadow: 0px 2px 2px 0px #686868;
		}
	}

	input {
		border: none;
		border-radius: 10px;
		padding: 5px;
		height: 25px;
	}

	img {
		${_size('30px')}
		margin: 0px 5px;
	}
`;
