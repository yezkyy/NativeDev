"use client";

import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		nama: "",
		username: "",
		password: "",
		email: "",
		noTelpon: "",
		alamat: "",
		role: "user",
	});
	const toast = useToast();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleRegister = () => {
		const existingUsers =
			JSON.parse(localStorage.getItem("registeredUsers")) || [];

		const isUsernameTaken = existingUsers.some(
			(user) => user.username === formData.username,
		);

		if (isUsernameTaken) {
			toast({
				title: "Registrasi gagal.",
				description: "Username sudah digunakan.",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
			return;
		}

		const updatedUsers = [...existingUsers, formData];
		localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

		toast({
			title: "Registrasi berhasil.",
			description: "Silakan login untuk melanjutkan.",
			status: "success",
			duration: 3000,
			isClosable: true,
		});
		navigate("/login");
	};

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"} textAlign={"center"}>
						Sign up
					</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<HStack>
							<Box>
								<FormControl id="nama" isRequired>
									<FormLabel>Nama Lengkap</FormLabel>
									<Input
										type="text"
										name="nama"
										value={formData.nama}
										onChange={handleChange}
									/>
								</FormControl>
							</Box>
							<Box>
								<FormControl id="username" isRequired>
									<FormLabel>Username</FormLabel>
									<Input
										type="text"
										name="username"
										value={formData.username}
										onChange={handleChange}
									/>
								</FormControl>
							</Box>
						</HStack>

						<FormControl id="email" isRequired>
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl id="noTelpon" isRequired>
							<FormLabel>No. Telepon</FormLabel>
							<Input
								type="text"
								name="noTelpon"
								value={formData.noTelpon}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl id="alamat" isRequired>
							<FormLabel>Alamat</FormLabel>
							<Input
								type="text"
								name="alamat"
								value={formData.alamat}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									value={formData.password}
									onChange={handleChange}
								/>
								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>

						<Stack spacing={10} pt={2}>
							<Button
								size="lg"
								bg={"blue.400"}
								color={"white"}
								_hover={{ bg: "blue.500" }}
								onClick={handleRegister}
							>
								Sign up
							</Button>
						</Stack>

						<Stack pt={6}>
							<Text align={"center"}>
								Sudah punya akun?{" "}
								<Link color={"blue.400"} href="/login">
									Login
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
