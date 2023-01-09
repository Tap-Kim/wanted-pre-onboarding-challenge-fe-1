/** @jsxImportSource @emotion/react */
import { deleteTodo, getTodos, updateTodo } from 'api/todo.api';
import { ErrorResult } from 'interface/api.interface';
import { ListItem } from 'interface/todo.interface';
import React, { useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { modalState } from 'recoil/modal.recoil';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Header, Wrapper } from './style';

function TodoList() {
	const navigate = useNavigate();
	const setModal = useSetRecoilState(modalState);
	const [todos, setTodos] = useState<ListItem[]>([]);
	const [isEditMode, setIsEditMode] = useState(false);

	useEffect(() => {
		onCallList();
	}, []);

	const onCallList = async () => {
		const result = await getTodos();

		if (result.data) {
			setTodos(result.data);
			return;
		}

		setModal({
			isOpen: true,
			message: (result as unknown as ErrorResult).details,
			handleOk: () => navigate('/login'),
		});
	};

	const onCallDelete = async (id: string) => {
		const data = await deleteTodo(id);

		if (data.data !== null) {
			setModal({
				isOpen: true,
				message: (data as unknown as ErrorResult).details,
			});
			setTodos((prev) => prev.filter((todo) => todo.id !== id));
		}
		setIsEditMode(!isEditMode);
	};

	const handleClickTodo = (event: MouseEvent<HTMLLIElement>) => {
		console.log(isEditMode);

		if (isEditMode) return;
		const { id } = (event.target as HTMLLIElement).dataset;
		navigate(`/todo/${id}`);
	};

	const handleDelete = (event: MouseEvent<HTMLImageElement>) => {
		event.stopPropagation();
		const { id } = (event.target as HTMLLIElement).dataset;
		console.log('handleDelete', id);
		onCallDelete(id!);
	};

	const handleEdit = async (event: MouseEvent<HTMLImageElement>) => {
		event.stopPropagation();

		const { id } = (event.target as HTMLLIElement).dataset;
		const { title, content } = todos.filter((todo) => todo.id === id)[0];
		const { data } = await updateTodo({ id, title, content });

		if (!data) {
			setModal({
				isOpen: true,
				message: '수정 실패',
			});
		}
		setIsEditMode(!isEditMode);
	};

	const handleChange = (
		event: ChangeEvent<HTMLInputElement>,
		type: 'title' | 'content'
	) => {
		event.stopPropagation();
		const target = event.target as HTMLInputElement;
		const { id } = target.dataset;

		setTodos((prev) => {
			const newTodos = prev.map((item) => {
				return item.id === id ? { ...item, [type]: target.value } : item;
			});
			return newTodos;
		});
	};

	return (
		<section css={Wrapper}>
			<div css={Header}>
				<div className="todo_title">제목</div>
				<div className="todo_content">내용</div>
				<div className="todo_create_at">생성일</div>
				<div className="todo_update_at">수정일</div>
			</div>
			{todos.map((item) => (
				<TodoListItem
					key={item.id}
					{...item}
					isEditMode={isEditMode}
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
