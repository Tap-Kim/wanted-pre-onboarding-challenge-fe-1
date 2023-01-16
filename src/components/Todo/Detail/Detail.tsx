/** @jsxImportSource @emotion/react */

import { getTodo, updateTodo } from 'api/todo.api';
import { Todo } from 'interface/todo.interface';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'utils/toast';
import { formatDate } from 'utils/util';
import { Header, Section, Wrapper } from './style';

const initValue: Todo = {
	title: '',
	content: '',
	id: '',
	createdAt: '',
	updatedAt: '',
};
function Detail() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [{ title, content, createdAt }, setTodo] = useState(initValue);
	const isEdit = pathname.indexOf('/edit') > -1;
	const id = pathname.replace(/todo|edit|\//gi, '');

	useEffect(() => {
		onCallTodo();
	}, []);

	const onCallTodo = async () => {
		const { data: todoResponse } = await getTodo(id);
		setTodo(todoResponse);
	};

	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo((prev) => ({ ...prev, title: e.target.value }));
	};

	const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTodo((prev) => ({ ...prev, content: e.target.value }));
	};

	const handleClick = async () => {
		if (isEdit) {
			const { data } = await updateTodo({ id, title, content });

			if (!data) {
				toast({ text: '수정 실패!', status: 'error' });
			} else {
				toast({ text: '수정 성공!', status: 'success' });
			}

			navigate(`/todo/${id}`);
			return;
		}
		navigate(`/todo/edit/${id}`);
	};

	return (
		<div css={Wrapper}>
			<div css={Header}>
				<div className="title">
					{isEdit ? (
						<input
							value={title}
							placeholder="제목을 입력해주세요."
							onChange={handleChangeTitle}
						/>
					) : (
						<h1>{title}</h1>
					)}
					<button type="button" onClick={handleClick}>
						{isEdit ? '저장' : '수정'}
					</button>
				</div>

				<p className="header_date">Date: {formatDate(createdAt)}</p>
				<hr />
			</div>
			<section css={Section}>
				{isEdit ? (
					<textarea
						value={content}
						placeholder="내용을 입력해주세요."
						onChange={handleChangeContent}
					/>
				) : (
					<p>{content}</p>
				)}
			</section>
		</div>
	);
}

export default Detail;
