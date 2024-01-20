import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";

import Navbar from "components/Navbar";

const Router = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
