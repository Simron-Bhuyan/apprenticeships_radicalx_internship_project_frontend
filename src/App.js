// import logo from './logo.svg';
import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import LoginContainer from "./Components/login/LoginContainer.js";
import Home from "./Components/home/Home";
import FormContainer from "./Components/apprenticeship_form/FormContainer";

function App() {
	<LoginContainer />
	return (
		<div className="App">
			<Routes>
				<Route
					path={'/*'}
					element={
						<Home />
					}
				/>
				<Route
					path={'/login'}
					element={
						<LoginContainer />
					}
				/>
				<Route
					path={'/apprenticeship-profile'}
					element={
						<FormContainer />
					}
				/>
			</Routes>
		</div>
	);
}

export default memo(App);
