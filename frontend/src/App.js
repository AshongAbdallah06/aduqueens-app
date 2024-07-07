import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Signup from "./pages/Signup";
import PlaceOrder from "./pages/PlaceOrder";
import Menus from "./pages/Menus";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import BookingForm from "./pages/BookingForm";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import useCheckAuth from "./hooks/useCheckAuth";

function App() {
	const { checkAuth, isAccessDenied, isLoading } = useCheckAuth();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isLoading) {
		return;
	}

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={!isAccessDenied ? <Home /> : <Navigate to="/login" />}
					/>
					<Route
						path="/about"
						element={!isAccessDenied ? <About /> : <Navigate to="/login" />}
					/>
					<Route
						path="/booking"
						element={!isAccessDenied ? <BookingForm /> : <Navigate to="/login" />}
					/>
					<Route
						path="/checkout"
						element={!isAccessDenied ? <Checkout /> : <Navigate to="/login" />}
					/>
					<Route
						path="/contact"
						element={!isAccessDenied ? <ContactUs /> : <Navigate to="/login" />}
					/>
					<Route
						path="/faq"
						element={!isAccessDenied ? <FAQ /> : <Navigate to="/login" />}
					/>
					<Route
						path="/gallery"
						element={!isAccessDenied ? <Gallery /> : <Navigate to="/login" />}
					/>
					<Route
						path="/menus"
						element={!isAccessDenied ? <Menus /> : <Navigate to="/login" />}
					/>
					<Route
						path="/place-order"
						element={!isAccessDenied ? <PlaceOrder /> : <Navigate to="/login" />}
					/>
					<Route
						path="/login"
						element={isAccessDenied ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/signup"
						element={isAccessDenied ? <Signup /> : <Navigate to="/" />}
					/>
					<Route
						path="/testimonials"
						element={!isAccessDenied ? <Testimonials /> : <Navigate to="/login" />}
					/>
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
