import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Image,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navbarLogo from "../assets/image/logo.png";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
	const storedUser = localStorage.getItem("user");
	const user = storedUser ? JSON.parse(storedUser) : null;

	const bg = useColorModeValue("white", "gray.900");
	const buttonBg = useColorModeValue("green.700", "blue.600");
	const buttonHoverBg = useColorModeValue("green.600", "blue.500");

	return (
		<Box
			as="nav"
			bg={bg}
			boxShadow="sm"
			position="sticky"
			top={0}
			zIndex={10}
			py={3}
		>
			<Container maxW="80vw">
				<Flex
					alignItems="center"
					justifyContent="space-between"
					flexDir={{ base: "column", md: "row" }}
					gap={{ base: 3, md: 0 }}
				>
					{/* Logo */}
					<Box>
						<Link to="/">
							<Image
								src={navbarLogo}
								alt="Logo TrashUp"
								width={40}
								objectFit="contain"
							/>
						</Link>
					</Box>

					{/* Menu kanan */}
					<HStack spacing={4} alignItems="center">
						<Link to="/about">
							<Text fontWeight="medium" fontSize="md">
								Tentang Kami
							</Text>
						</Link>
						<Link to="/help">
							<Text fontWeight="medium" fontSize="md">
								Bantuan
							</Text>
						</Link>
						<Link to="/order">
							<Text fontWeight="medium" fontSize="md">
								Pesan
							</Text>
						</Link>

						{/* Kalau user login */}
						{user ? (
							<>
								{/* Hanya regar yang punya tombol driver */}
								{user.username === "regar" && (
									<Link to="/driver">
										<Button
											colorScheme="blue"
											size="sm"
											fontWeight="medium"
										>
											Driver
										</Button>
									</Link>
								)}
								<LogoutButton />
							</>
						) : (
							<Link to="/login">
								<Button
									bg={buttonBg}
									_hover={{ bg: buttonHoverBg }}
									color="white"
									fontWeight="medium"
									fontSize="md"
									px={6}
								>
									Masuk
								</Button>
							</Link>
						)}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default NavBar;