import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortal extends PropsWithChildren {
	selector: '#modal';
}
function ModalPortal({ children, selector }: ModalPortal) {
	const element =
		typeof window !== 'undefined' && document.querySelector(selector);

	return element && children ? ReactDOM.createPortal(children, element) : null;
}

export default ModalPortal;
