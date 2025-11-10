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
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<Box
			as="nav"
			bg={useColorModeValue("white", "gray.900")}
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
				>
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

					<HStack spacing={4}>
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

						{user ? (
							<LogoutButton />
						) : (
							<>
								<Link to="/login">
									<Button
										bg={useColorModeValue("green.700", "blue.600")}
										_hover={{ bg: useColorModeValue("green.600", "blue.500") }}
										color="white"
										fontWeight="medium"
										fontSize="md"
										px={6}
									>
										Masuk
									</Button>
								</Link>
							</>
						)}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default NavBar;
