import _toast from 'react-hot-toast';

type StatusTypes = 'success' | 'error' | 'warning';
interface Toast {
	text: string;
	status: StatusTypes;
}
const StatusIcon: Record<StatusTypes, string> = {
	success: '✅',
	error: '🚫',
	warning: '⚠️',
};

const StatusColor: Record<StatusTypes, string> = {
	success: '#7296f1',
	error: '#e64c4c',
	warning: '#ffb100',
};
const toast = ({ text, status }: Toast) => {
	_toast(text, {
		duration: 3000,
		position: 'bottom-center',
		icon: StatusIcon[status],

		iconTheme: {
			primary: '#000',
			secondary: '#fff',
		},
		style: {
			color: '#ffffff',
			fontSize: 'large',
			backgroundColor: StatusColor[status],
		},
	});
};

export default toast;
