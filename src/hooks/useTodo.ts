import { createTodo, deleteTodo, getTodos, updateTodo } from 'api/todo.api';
import { ErrorResult } from 'interface/api.interface';
import { Todo } from 'interface/todo.interface';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { modalState } from 'recoil/modal.recoil';

const useTodo = () => {
	const navigate = useNavigate();
	const setModal = useSetRecoilState(modalState);
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		onCallList();
	}, []);

	const handleAddTodo = async () => {
		const { data } = await createTodo({ title: '새 일감', content: '새 내용' });
		setTodos((prev) => [...prev, data]);
	};

	const handleDelete = (event: MouseEvent<HTMLImageElement>) => {
		event.stopPropagation();
		const { id } = (event.target as HTMLLIElement).dataset;
		onCallDelete(id!);
	};

	const handleEdit = async (event: MouseEvent<HTMLImageElement>) => {
		event.stopPropagation();
		const { id } = (event.target as HTMLLIElement).dataset;
		const { title, content, isEdit } = todos.filter(
			(todo) => todo.id === id
		)[0];

		if (!isEdit && id) {
			onSetEditTodos(id);
			return;
		}

		const { data } = await updateTodo({ id, title, content });

		if (!data) {
			setModal({
				isOpen: true,
				message: '수정 실패',
			});
			return;
		}

		const newTodos = todos.map((item) => ({
			...item,
			isEdit: item.id === id ? false : item.isEdit,
		}));
		setTodos(newTodos);
	};

	const onCallList = async () => {
		const result = await getTodos();
		if (result.data) {
			const newTodos = result.data.map((todo) => ({ ...todo, isEdit: false }));
			setTodos(newTodos);
			return;
		}

		setModal({
			isOpen: true,
			message: (result as unknown as ErrorResult).details,
			handleOk: () => navigate('/login'),
		});
	};

	const onCallDelete = (id: string) => {
		setModal({
			isOpen: true,
			message: '일감을 지우시겠습니까?',
			handleClose: () => {},
			handleOk: async () => {
				const data = await deleteTodo(id);
				if (data.data !== null) {
					setModal({
						isOpen: true,
						message: (data as unknown as ErrorResult).details,
					});
					return;
				}

				setTodos((prev) => prev.filter((todo) => todo.id !== id));
			},
		});
	};

	const onSetEditTodos = (id: string) => {
		const newTodos = todos.map((item) => ({ ...item, isEdit: item.id === id }));
		setTodos(newTodos);
	};

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

	const handleClickTodo = (id: string) => {
		navigate(`/todo/${id}`);
	};

	return {
		todos,
		setTodos,
		handleAddTodo,
		handleDelete,
		handleEdit,
		handleChange,
		handleClickTodo,
		onCallDelete,
	};
};

export default useTodo;
