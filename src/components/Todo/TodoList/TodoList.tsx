/** @jsxImportSource @emotion/react */
import useTodo from 'hooks/useTodo';
import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Header, Wrapper } from './style';

function TodoList() {
	const {
		todos,
		handleAddTodo,
		handleDelete,
		handleEdit,
		handleChange,
		handleClickTodo,
	} = useTodo();

	return (
		<section css={Wrapper}>
			<div className="todo_header" css={Header}>
				<div className="todo_title">제목</div>
				<div className="todo_content">내용</div>
				<div className="todo_create_at">생성일</div>
				<div className="todo_update_at">수정일</div>
				<div className="todo_btn_area" />
			</div>
			{todos.map((item) => (
				<TodoListItem
					key={item.id}
					{...item}
					handleClickTodo={handleClickTodo}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
					handleChange={handleChange}
				/>
			))}
			<nav className="float_btn">
				<button type="button" onClick={handleAddTodo}>
					+
				</button>
			</nav>
		</section>
	);
}

export default TodoList;
