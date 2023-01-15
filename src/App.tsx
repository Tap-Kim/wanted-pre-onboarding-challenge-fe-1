import ErrorBoundary from 'components/common/ErrorBoundary';
import Loading from 'components/common/Loading';
import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import Login from 'components/Login/Login';
import NotFound from 'components/NotFound/NotFound';
import SignUp from 'components/SignUp/SignUp';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

const TodoList = lazy(() => import('components/Todo/TodoList/TodoList'));
const Detail = lazy(() => import('components/Todo/Detail/Detail'));

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Main>
					<Routes>
						<Route path="/" element={<div>빈 화면</div>} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="todo" element={<Outlet />}>
							<Route
								index
								element={
									<ErrorBoundary>
										<Suspense fallback={<Loading />}>
											<TodoList />
										</Suspense>
									</ErrorBoundary>
								}
							/>
							<Route
								path=":todoId"
								element={
									<ErrorBoundary>
										<Suspense fallback={<Loading />}>
											<Detail />
										</Suspense>
									</ErrorBoundary>
								}
							/>
							<Route
								path="edit/:todoId"
								element={
									<ErrorBoundary>
										<Suspense fallback={<Loading />}>
											<Detail />
										</Suspense>
									</ErrorBoundary>
								}
							/>
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Main>
			</div>
		</BrowserRouter>
	);
}

export default App;
