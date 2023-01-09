/** @jsxImportSource @emotion/react */
import dayjs from 'dayjs';
import { ListItem } from 'interface/todo.interface';
import React, { ChangeEvent, EventHandler, MouseEventHandler } from 'react';
import { ItemWrapper } from './style';

const deleteIcon = `${process.env.PUBLIC_URL}/icons/delete.png`;
const editIcon = `${process.env.PUBLIC_URL}/icons/edit.png`;

interface Props extends ListItem {
	isEditMode: boolean;
	handleClickTodo: MouseEventHandler<HTMLLIElement>;
	handleDelete: MouseEventHandler<HTMLImageElement>;
	handleEdit: MouseEventHandler<HTMLImageElement>;
	handleChange: (
		event: ChangeEvent<HTMLInputElement>,
		type: 'title' | 'content'
	) => void;
}

function TodoListItem({
	isEditMode,
	id,
	title,
	content,
	createdAt,
	updatedAt,
	handleClickTodo,
	handleDelete,
	handleEdit,
	handleChange,
}: Props) {
	const create = dayjs(createdAt, 'YYYY-MM-DD HH:mm:ss').format('YY-MM-DD');
	const update = dayjs(updatedAt, 'YYYY-MM-DD HH:mm:ss').format('YY-MM-DD');
	return (
		<li
			css={ItemWrapper}
			role="presentation"
			data-id={id}
			onClick={handleClickTodo}
		>
			<div className="todo_title">
				{isEditMode ? (
					<input
						data-id={id}
						value={title}
						onClick={(e) => e.stopPropagation()}
						onChange={(e) => handleChange(e, 'title')}
					/>
				) : (
					title
				)}
			</div>
			<div className="todo_content">
				{isEditMode ? (
					<input
						data-id={id}
						value={content}
						onClick={(e) => e.stopPropagation()}
						onChange={(e) => handleChange(e, 'content')}
					/>
				) : (
					content
				)}
			</div>
			<div className="todo_create_at">{create}</div>
			<div className="todo_update_at">{update}</div>
			<img
				src={deleteIcon}
				role="presentation"
				alt="delete_icon"
				className="btn_update"
				data-id={id}
				onClick={handleDelete}
			/>
			<img
				src={editIcon}
				role="presentation"
				alt="editIcon"
				className="btn_delete"
				data-id={id}
				onClick={handleEdit}
			/>
		</li>
	);
}

export default TodoListItem;
