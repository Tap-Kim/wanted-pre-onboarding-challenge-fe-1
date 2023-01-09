import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import Login from 'components/Login/Login';
import NotFound from 'components/NotFound/NotFound';
import SignUp from 'components/SignUp/SignUp';
import Detail from 'components/Todo/Detail/Detail';
import TodoList from 'components/Todo/TodoList/TodoList';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Main>
					<Routes>
						<Route path="/" element={<div>빈 화면</div>} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/todo" element={<TodoList />} />
						<Route path="/todo/:id" element={<Detail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Main>
			</div>
		</BrowserRouter>
	);
}

export default App;
