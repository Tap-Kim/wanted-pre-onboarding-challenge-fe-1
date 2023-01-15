import { Global } from '@emotion/react';
import Alert from 'components/Modal/Modal';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { globalStyles } from 'styles/global.style';
import { Toaster } from 'react-hot-toast';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<>
		<Global styles={globalStyles} />
		<RecoilRoot>
			<App />
			<Alert />
			<Toaster />
		</RecoilRoot>
	</>
);
