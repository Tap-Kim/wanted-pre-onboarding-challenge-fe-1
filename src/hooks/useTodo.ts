import { deleteTodo, getTodos } from 'api/todo.api';
import { ErrorResult } from 'interface/api.interface';
import { Todo } from 'interface/todo.interface';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { modalState } from 'recoil/modal.recoil';
import toast from 'utils/toast';

const useTodo = () => {
	const navigate = useNavigate();
	const setModal = useSetRecoilState(modalState);
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		onCallList();
	}, []);

	const handleAddTodo = async () => {
		setModal({
			id: 'newTodoModal',
			isOpen: true,
			handleOk: () => {
				onCallList();
				toast({ text: '생성 완료!', status: 'success' });
			},
		});
	};

	const handleDelete = (event: MouseEvent<HTMLImageElement>) => {
		event.stopPropagation();
		const { id = '' } = (event.target as HTMLLIElement).dataset;

		setModal({
			id: 'confirm',
			isOpen: true,
			message: '일감을 지우시겠습니까?',
			handleOk: async () => {
				const data = await deleteTodo(id);
				if (data.data !== null) {
					setModal({
						id: 'alert',
						isOpen: true,
						message: (data as unknown as ErrorResult).details,
					});
					return;
				}

				setTodos((prev) => prev.filter((todo) => todo.id !== id));
				toast({ text: '삭제 완료!', status: 'success' });
			},
		});
	};

	const onCallList = async () => {
		const result = await getTodos();
		if (result.data) {
			setTodos(result.data);
			return;
		}

		setModal({
			id: 'alert',
			isOpen: true,
			message: (result as unknown as ErrorResult).details,
			handleOk: () => navigate('/login'),
		});
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
		onCallList,
		handleAddTodo,
		handleDelete,
		handleChange,
		handleClickTodo,
	};
};

export default useTodo;
