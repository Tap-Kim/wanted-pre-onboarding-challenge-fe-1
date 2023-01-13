/** @jsxImportSource @emotion/react */
import ModalPortal from 'ModalPortal';
import React, { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { modalSelector } from 'recoil/modal.recoil';
import { ButtonArea, Content, Wrapper } from './style';

function Modal() {
	const [{ isOpen, message, handleOk, handleClose }, setModal] =
		useRecoilState(modalSelector);
	const close = (e: MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		setModal({ isOpen: false });
	};

	const ok = (e: MouseEvent<HTMLElement>) => {
		handleOk?.();
		close(e);
	};

	if (!isOpen) return <></>;
	return (
		<ModalPortal selector="#modal">
			<section css={Wrapper} role="presentation" onClick={close}>
				<div
					css={Content}
					role="presentation"
					onClick={(e) => e.stopPropagation()}
				>
					<h3>{message}</h3>
					<div css={ButtonArea}>
						{handleClose && (
							<button className="btn_cancel" type="button" onClick={close}>
								취소
							</button>
						)}
						<button className="btn_ok" type="button" onClick={ok}>
							확인
						</button>
					</div>
				</div>
			</section>
		</ModalPortal>
	);
}

export default Modal;
