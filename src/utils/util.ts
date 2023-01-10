import dayjs from 'dayjs';

export const formatDate = (date: string) => {
	return dayjs(date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
};
