import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='catalog' element={<Catalog />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
