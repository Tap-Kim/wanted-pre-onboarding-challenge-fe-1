/** @jsxImportSource @emotion/react */
import ModalPortal from 'ModalPortal';
import React, { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { modalSelector } from 'recoil/modal.recoil';
import { ButtonArea, Content, Wrapper } from '../style';

function Alert() {
	const [{ isOpen, message, handleOk }, setModal] =
		useRecoilState(modalSelector);
	const close = (e: MouseEvent<HTMLElement>) => {
		e.stopPropagation();

		if (handleOk) handleOk?.();
		setModal({ isOpen: false });
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
					<h3>{message} ⚠️</h3>
					<div css={ButtonArea}>
						<button className="btn_ok" type="button" onClick={close}>
							확인
						</button>
					</div>
				</div>
			</section>
		</ModalPortal>
	);
}

export default Alert;
