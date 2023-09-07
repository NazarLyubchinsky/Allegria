import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Layout from "./Layout/Layout";
import Catalog from "./pages/Catalog/Catalog";
import About from "./pages/Home/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Questions from "./pages/Questions/Questions";

// lang
import './utils/i18n'

function App() {
	return (
		<Suspense fallback={'...loading'}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='catalog' element={<Catalog />} />
					<Route path='questions' element={<Questions/>}/>
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
