import { atom, selector } from 'recoil';

export interface ModalAtom {
	id: 'alert' | 'confirm' | 'newTodoModal';
	isOpen: boolean;
	message?: string;
	modalProps?: any;
	handleOk?: VoidFunction;
	openModal?: VoidFunction;
	handleClose?: VoidFunction;
}
export const modalState = atom<ModalAtom>({
	key: 'modalState',
	default: { isOpen: false, id: 'alert' },
});

export const modalSelector = selector<ModalAtom>({
	key: 'modalSelector',
	get: ({ get }) => ({ ...get(modalState) }),
	set: ({ set }, newValue) => set(modalState, newValue),
});
