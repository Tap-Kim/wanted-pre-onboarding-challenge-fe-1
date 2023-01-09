/** @jsxImportSource @emotion/react */
import dayjs from 'dayjs';
import { ItemWrapper } from './style';

function Detail() {
	// eslint-disable-next-line react/react-in-jsx-scope
	return <div>Detail</div>;

	// const create = dayjs(createdAt, 'YYYY-MM-DD HH:mm:ss').format('YY-MM-DD');
	// const update = dayjs(updatedAt, 'YYYY-MM-DD HH:mm:ss').format('YY-MM-DD');
	// return (
	// 	<li
	// 		css={ItemWrapper}
	// 		role="presentation"
	// 		data-id={id}
	// 		onClick={handleClickTodo}
	// 	>
	// 		<div className="todo_title">{title}</div>
	// 		<div className="todo_content">{content}</div>
	// 		<div className="todo_create_at">{create}</div>
	// 		<div className="todo_update_at">{update}</div>
	// 	</li>
	// );
}

export default Detail;
