/** @jsxImportSource @emotion/react */

import { createTodo } from 'api/todo.api';
import { IButtonArea } from 'interface/modal.interface';
import React, { MouseEvent, useState } from 'react';
import { ButtonArea } from '../ButtonArea/ButtonArea';
import { Wrapper } from './style';

function TodoModal({ id, ok, close }: IButtonArea) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleAction = async (event: MouseEvent<HTMLButtonElement>) => {
		createTodo({ title, content });
		ok(event);
	};
	return (
		<div css={Wrapper}>
			<h3> 일감 생성</h3>
			<div className="content-wrapper">
				<span>제목</span>
				<input
					data-id={id}
					value={title}
					placeholder="제목을 입력해주세요."
					onClick={(e) => e.stopPropagation()}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="content-wrapper">
				<span>내용</span>
				<textarea
					data-id={id}
					value={content}
					placeholder="내용을 입력해주세요."
					onClick={(e) => e.stopPropagation()}
					onChange={(e) => setContent(e.target.value)}
				/>
			</div>
			<ButtonArea {...{ id, ok: handleAction, close, okTxt: '생성' }} />
		</div>
	);
}

export default TodoModal;
