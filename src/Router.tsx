import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";

const Router = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<div>Home Page</div>} />
		</Routes>
	</BrowserRouter>
);

export default Router;
