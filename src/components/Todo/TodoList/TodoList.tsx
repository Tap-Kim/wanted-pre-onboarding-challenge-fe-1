/** @jsxImportSource @emotion/react */
import useTodo from 'hooks/useTodo';
import React, { ChangeEvent, MouseEvent } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Header, Wrapper } from './style';

function TodoList() {
	const { todos, setTodos, navigate, handleAddTodo, handleDelete, handleEdit } =
		useTodo();

	const handleChange = (
		event: ChangeEvent<HTMLInputElement>,
		type: 'title' | 'content'
	) => {
		event.stopPropagation();
		const target = event.target as HTMLInputElement;
		const { id } = target.dataset;

		const newTodos = todos.map((item) =>
			item.id === id ? { ...item, [type]: target.value } : item
		);
		setTodos(newTodos);
	};

	const handleClickTodo = (event: MouseEvent<HTMLLIElement>) => {
		const { id } = (event.target as HTMLLIElement).dataset;
		navigate(`/todo/${id}`);
	};

	return (
		<section css={Wrapper}>
			<nav className="nav_area">
				<button type="button" onClick={handleAddTodo}>
					추가
				</button>
			</nav>
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
		</section>
	);
}

export default TodoList;
