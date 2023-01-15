/** @jsxImportSource @emotion/react */
import ModalPortal from 'ModalPortal';
import React, { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { modalSelector } from 'recoil/modal.recoil';
import { ButtonArea } from './ButtonArea/ButtonArea';
import TodoModal from './TodoModal/TodoModal';
import { Content, Wrapper } from './style';

function Modal() {
	const [{ id, isOpen, message, handleOk }, setModal] =
		useRecoilState(modalSelector);
	const close = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setModal({ id, isOpen: false });
	};

	const ok = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		handleOk?.();
		close(e);
	};

	if (!isOpen) return <></>;

	const component = () => {
		switch (id) {
			case 'newTodoModal':
				return <TodoModal {...{ id, ok, close }} />;
			default:
				return (
					<>
						<h3>{message}</h3>
						<ButtonArea {...{ id, ok, close }} />
					</>
				);
		}
	};

	return (
		<ModalPortal selector="#modal">
			<section css={Wrapper} role="presentation" onClick={close}>
				<div
					css={Content}
					role="presentation"
					onClick={(e) => e.stopPropagation()}
				>
					{component()}
				</div>
			</section>
		</ModalPortal>
	);
}

export default Modal;
