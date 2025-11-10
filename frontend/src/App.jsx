import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ThemeButton from "./components/ThemeButton";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import RegisterPage from "./pages/RegisterPage";
import DriverPage from "./pages/DriverPage";

function App() {
	const location = useLocation();
	const isAuthPage =
		location.pathname === "/login" || location.pathname === "/register";

	return (
		<Box minH={"100vh"} bg={useColorModeValue("white", "gray.900")}>
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/order" element={<OrderPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/help" element={<HelpPage />} />
				<Route path="/driver" element={<DriverPage />} />
			</Routes>

			<Box position="fixed" bottom="4" right="4" zIndex="10">
				<ThemeButton />
			</Box>

			{!isAuthPage && <Footer />}
		</Box>
	);
}

export default App;
