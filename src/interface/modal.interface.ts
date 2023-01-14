import { MouseEventHandler } from 'react';
import { ModalAtom } from 'recoil/modal.recoil';

export interface IButtonArea {
	id: Pick<ModalAtom, 'id'>['id'];
	close: MouseEventHandler<HTMLButtonElement>;
	ok: MouseEventHandler<HTMLButtonElement>;
	closeTxt?: string;
	okTxt?: string;
}
