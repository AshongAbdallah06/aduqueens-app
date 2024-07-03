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
// import Footer from "./components/Footer";

function App() {
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={user ? <Home /> : <Navigate to="/login" />}
					/>
					<Route
						path="/about"
						element={user ? <About /> : <Navigate to="/login" />}
					/>
					<Route
						path="/booking"
						element={user ? <BookingForm /> : <Navigate to="/login" />}
					/>
					<Route
						path="/checkout"
						element={user ? <Checkout /> : <Navigate to="/login" />}
					/>
					<Route
						path="/contact"
						element={user ? <ContactUs /> : <Navigate to="/login" />}
					/>
					<Route
						path="/faq"
						element={user ? <FAQ /> : <Navigate to="/login" />}
					/>
					<Route
						path="/gallery"
						element={user ? <Gallery /> : <Navigate to="/login" />}
					/>
					<Route
						path="/menus"
						element={user ? <Menus /> : <Navigate to="/login" />}
					/>
					<Route
						path="/place-order"
						element={user ? <PlaceOrder /> : <Navigate to="/login" />}
					/>
					<Route
						path="/login"
						element={!user ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/signup"
						element={!user ? <Signup /> : <Navigate to="/" />}
					/>
					<Route
						path="/testimonials"
						element={user ? <Testimonials /> : <Navigate to="/login" />}
					/>
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
