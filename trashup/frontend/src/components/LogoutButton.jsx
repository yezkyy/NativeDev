import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
	const navigate = useNavigate();
	const toast = useToast();

	const handleLogout = () => {
		localStorage.removeItem("user");

		toast({
			title: "Logout berhasil",
			description: "Anda telah logout dari akun",
			status: "info",
			duration: 3000,
			isClosable: true,
		});

		navigate("/login");
	};

	return (
		<Button colorScheme="red" variant="outline" onClick={handleLogout}>
			Logout
		</Button>
	);
}
