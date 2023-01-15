/* eslint-disable react/react-in-jsx-scope */
import { useRouteError } from 'react-router-dom';

interface UseRouterError {
	statusText: string;
	message: string;
}
export default function ErrorPage() {
	const error = useRouteError() as UseRouterError;
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
