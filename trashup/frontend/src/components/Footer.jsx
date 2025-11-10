import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	useBreakpointValue,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import navbarLogo from "../assets/image/logo.png";

const Footer = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Box bg={"#003749"} color={"white"} mt={20} py={20}>
			<Container maxW={"80vw"}>
				<Flex
					direction={{ base: "column", md: "row" }}
					justify={"space-between"}
					gap={12}
				>
					<Stack spacing={4} maxW={"300px"}>
						<Link to={"/"}>
							<Image
								src={navbarLogo}
								alt="Logo TrashUp"
								width={"120px"}
								objectFit="contain"
							/>
						</Link>
						<Text fontSize={"sm"}>
							Pengambilan sampah sesuai permintaan. Layanan pengangkut sampah
							untuk lingkungan dan masa depan yang berkelanjutan.
						</Text>
						<HStack spacing={4}>
							<Link to="#">
								<SlSocialFacebook />
							</Link>
							<Link to="#">
								<FaXTwitter />
							</Link>
							<Link to="#">
								<FaInstagram />
							</Link>
						</HStack>
					</Stack>

					<Stack spacing={3}>
						<Heading size="md">Tautan Cepat</Heading>
						<Link to="/">
							<Text>Beranda</Text>
						</Link>
						<Link to="/register">
							<Text>Daftar</Text>
						</Link>
						<Link to="/order">
							<Text>Pesan</Text>
						</Link>
						<Link to="/about">
							<Text>Tentang Kami</Text>
						</Link>
					</Stack>

					<Stack spacing={3}>
						<Heading size="md">Hubungi Kami</Heading>
						<Text>info@trashup.com</Text>
						<Text>(123) 456-7890</Text>
						<Button
							bg={useColorModeValue("green.700", "blue.600")}
							_hover={{ bg: useColorModeValue("green.600", "blue.500") }}
							color="white"
							fontWeight="medium"
							fontSize="md"
							px={6}
						>
							Kontak Kami
						</Button>
					</Stack>
				</Flex>

				<Flex
					direction={{ base: "column", md: "row" }}
					justify="space-between"
					align={{ base: "start", md: "center" }}
					mt={12}
					px={4}
					gap={4}
				>
					<Text fontSize="sm">© 2025 TrashUp. All rights reserved.</Text>
					<HStack spacing={6}>
						<Link to="#">
							<Text fontSize="sm">Privacy Policy</Text>
						</Link>
						<Link to="#">
							<Text fontSize="sm">Terms of Service</Text>
						</Link>
						<Link to="#">
							<Text fontSize="sm">Cookie Policy</Text>
						</Link>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
