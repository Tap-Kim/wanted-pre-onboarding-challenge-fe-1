/** @jsxImportSource @emotion/react */

import { getTodo } from 'api/todo.api';
import { AxiosError } from 'axios';
import { Todo } from 'interface/todo.interface';
import React, { useEffect, useState } from 'react';
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
	const [{ title, content, createdAt }, setTodo] = useState(initValue);
	useEffect(() => {
		onCallTodo();
	}, []);

	const onCallTodo = async () => {
		const id = window.location.pathname.substring(6);
		const { data: todoResponse } = await getTodo(id);
		setTodo(todoResponse);
	};

	return (
		<div css={Wrapper}>
			<div css={Header}>
				<h1>{title}</h1>
				<p className="header_date">Date: {formatDate(createdAt)}</p>
				<hr />
			</div>
			<section css={Section}>
				<p>{content}</p>
			</section>
		</div>
	);
}

export default Detail;
