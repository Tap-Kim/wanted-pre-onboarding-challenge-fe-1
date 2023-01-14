/** @jsxImportSource @emotion/react */
import { ListItem } from 'interface/todo.interface';
import React, { ChangeEvent, MouseEventHandler } from 'react';
import { formatDate } from 'utils/util';
import { ItemWrapper } from './style';

const deleteIcon = `${process.env.PUBLIC_URL}/icons/delete.png`;
const editIcon = `${process.env.PUBLIC_URL}/icons/edit.png`;

interface Props extends ListItem {
	handleClickTodo: MouseEventHandler<HTMLLIElement>;
	handleDelete: MouseEventHandler<HTMLImageElement>;
	handleEdit: MouseEventHandler<HTMLImageElement>;
	handleChange: (
		event: ChangeEvent<HTMLInputElement>,
		type: 'title' | 'content'
	) => void;
}

function TodoListItem({
	id,
	title,
	content,
	createdAt,
	updatedAt,
	isEdit,
	handleClickTodo,
	handleDelete,
	handleEdit,
	handleChange,
}: Props) {
	const create = formatDate(createdAt);
	const update = formatDate(updatedAt);
	return (
		<li
			css={ItemWrapper}
			role="presentation"
			data-id={id}
			onClick={handleClickTodo}
		>
			<div className="todo_title">
				{isEdit ? (
					<input
						data-id={id}
						value={title}
						placeholder="제목을 입력해주세요."
						onClick={(e) => e.stopPropagation()}
						onChange={(e) => handleChange(e, 'title')}
					/>
				) : (
					<p title={title}>{title}</p>
				)}
			</div>
			<div className="todo_content">
				{isEdit ? (
					<input
						data-id={id}
						value={content}
						placeholder="내용을 입력해주세요."
						onClick={(e) => e.stopPropagation()}
						onChange={(e) => handleChange(e, 'content')}
					/>
				) : (
					<p title={content}>{content}</p>
				)}
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
					onClick={handleEdit}
				/>
			</div>
		</li>
	);
}

export default TodoListItem;
