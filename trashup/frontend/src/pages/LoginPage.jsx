import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const [formData, setFormData] = useState({ username: "", password: "" });
	const toast = useToast();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleLogin = () => {
		const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

		const foundUser = users.find(
			(user) =>
				user.username === formData.username &&
				user.password === formData.password,
		);

		if (foundUser) {
			localStorage.setItem("user", JSON.stringify(foundUser));
			toast({
				title: "Login berhasil.",
				description: `Selamat datang, ${foundUser.nama}!`,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			navigate("/");
		} else {
			toast({
				title: "Login gagal.",
				description: "Username atau password salah.",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"md"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Masuk ke akun Anda</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<FormControl id="username" isRequired>
							<FormLabel>Username</FormLabel>
							<Input
								type="text"
								name="username"
								value={formData.username}
								onChange={handleChange}
							/>
						</FormControl>
						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
							/>
						</FormControl>
						<Stack spacing={10}>
							<Button
								bg={"blue.400"}
								color={"white"}
								_hover={{ bg: "blue.500" }}
								onClick={handleLogin}
							>
								Masuk
							</Button>
						</Stack>
						<Stack pt={3}>
							<Text align={"center"}>
								Belum punya akun?{" "}
								<a href="/register" style={{ color: "#4299e1" }}>
									Daftar di sini
								</a>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
