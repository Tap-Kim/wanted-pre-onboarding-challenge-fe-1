/** @jsxImportSource @emotion/react */
import { Todo } from 'interface/todo.interface';
import React, { MouseEventHandler } from 'react';
import { formatDate } from 'utils/util';
import { ItemWrapper } from './style';

const deleteIcon = `${process.env.PUBLIC_URL}/icons/delete.png`;
const editIcon = `${process.env.PUBLIC_URL}/icons/edit.png`;

interface Props extends Todo {
	handleClickTodo: (id: string) => void;
	handleDelete: MouseEventHandler<HTMLImageElement>;
}

function TodoListItem({
	id,
	title,
	content,
	createdAt,
	updatedAt,
	handleClickTodo,
	handleDelete,
}: Props) {
	const create = formatDate(createdAt);
	const update = formatDate(updatedAt);
	return (
		<li
			css={ItemWrapper}
			role="presentation"
			data-id={id}
			onClick={() => handleClickTodo(id)}
		>
			<div className="todo_title">
				<p title={title}>{title}</p>
			</div>
			<div className="todo_content">
				<p title={content}>{content}</p>
			</div>

			<div className="todo_create_at">
				<p title={create}>{create}</p>
			</div>
			<div className="todo_update_at">
				<p title={update}>{update}</p>
			</div>
			<div className="todo_btn_area">
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
				/>
			</div>
		</li>
	);
}

export default TodoListItem;
