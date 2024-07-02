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
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/booking"
						element={<BookingForm />}
					/>
					<Route
						path="/checkout"
						element={<Checkout />}
					/>
					<Route
						path="/contact"
						element={<ContactUs />}
					/>
					<Route
						path="/faq"
						element={<FAQ />}
					/>
					<Route
						path="/gallery"
						element={<Gallery />}
					/>
					<Route
						path="/menus"
						element={<Menus />}
					/>
					<Route
						path="/place-order"
						element={<PlaceOrder />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/signup"
						element={<Signup />}
					/>
					<Route
						path="/testimonials"
						element={<Testimonials />}
					/>
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
