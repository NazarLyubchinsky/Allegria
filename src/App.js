import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

// pages
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart/Cart";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";
import About from "./pages/Home/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import Questions from "./pages/Questions/Questions";

// lang
import './utils/i18n'

function App() {
	return (
		<Suspense fallback={<Preloader />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='catalog' element={<Catalog />} />
					<Route path='questions' element={<Questions />} />
					<Route path='product/:id' element={<Product />} />
					<Route path='cart' element={<Cart />} />
					<Route path='favorites' element={<Favorites />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
