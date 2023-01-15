import { css } from '@emotion/react';
import { _flexbox, _hoverShadow, _size } from 'styles/mixin.style';

export const TodoCommonStyle = css`
	${_size('80vw', '60px')}
	padding: 20px;
	margin: 5px;

	font-weight: 800;
	font-size: larger;

	border-radius: 15px;
`;

export const TodoWidthStyle = css`
	.todo_title {
		width: 20%;
	}
	.todo_content {
		width: 30%;
	}
	.todo_create_at {
		width: 20%;
	}
	.todo_update_at {
		width: 20%;
	}
	.todo_btn_area {
		width: 10%;
	}

	p {
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.button {
		background-color: aliceblue;
	}
`;

export const ItemWrapper = css`
	${TodoCommonStyle}
	${_flexbox()}
	${TodoWidthStyle}

	&:hover {
		${_hoverShadow}
		background: #00ae68b8;
		color: #ffffff;
	}

	transition: all 0.2s;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
		0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
		0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
	margin: 10px 0px;

	cursor: pointer;

	li {
		:active {
			background-color: #ffd583f5;
			color: #ffffff;
			border-bottom: 2px solid #000000;
			box-shadow: 0px 2px 2px 0px #686868;
		}
	}

	img {
		${_size('30px')}
		margin: 0px 5px;
		padding: 5px;

		&:hover {
			${_hoverShadow}
			background: #ffffff;
			border-radius: 20px;
		}
	}
`;
