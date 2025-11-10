import {
	Box,
	Button,
	Card,
	Flex,
	Heading,
	HStack,
	Image,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import clientImage from "../../assets/image/driver-client.png";
import { FaRegStar, FaStar } from "react-icons/fa";

function AboutSection() {
	return (
		<Box mt={32} px={{ base: 4, md: 16 }} w="full">
			<VStack spacing={2}>
				<Heading textAlign="center" size="2xl" fontWeight="bold">
					Tentang Kami
				</Heading>
				<Text
					textAlign="center"
					fontSize={{ base: "lg", md: "2xl" }}
					fontWeight="light"
				>
					Waktunya{" "}
					<Text as="span" color="#26B170">
						Trash
					</Text>
					<Text as="span" color="#008DBC">
						Up
					</Text>{" "}
					lingkunganmu!
				</Text>
			</VStack>

			<Flex
				direction={{ base: "column", md: "row" }}
				align="center"
				gap={{ base: 8, md: 14 }}
				mt={16}
			>
				<Box w={{ base: "100%", md: "50%" }} textAlign="center">
					<Image
						src={clientImage}
						alt="Hero Image"
						rounded={20}
						w={{ base: "80%", md: "100%" }}
						mx="auto"
					/>
				</Box>

				<Stack spacing={6} w={{ base: "100%", md: "50%" }}>
					<Text
						borderLeft="8px solid #26B170"
						pl={4}
						fontSize={{ base: "sm", md: "md" }}
						textAlign="justify"
					>
						TrashUp adalah sebuah platform layanan pengelolaan sampah berbasis
						digital yang berfokus pada penjemputan sampah dari rumah ke rumah di
						wilayah Kota Samarinda, Kalimantan Timur.
					</Text>
					<Text fontSize={{ base: "sm", md: "md" }} textAlign="justify">
						Solusi dirancang berdasarkan kebutuhan nyata masyarakat untuk
						memberikan kemudahan, kecepatan, dan kenyamanan dalam membuang
						sampah serta membuka lapangan kerja baru bagi masyarakat setempat.
					</Text>
					<Button
						bg={useColorModeValue("#26B170", "blue.600")}
						_hover={{ bg: useColorModeValue("green.600", "blue.500") }}
						color="white"
						w="fit-content"
					>
						Kenali kami lebih Dekat
					</Button>
				</Stack>
			</Flex>

			<SimpleGrid
				mt={10}
				columns={{ base: 1, md: 3 }}
				spacing={6}
				textAlign="center"
			>
				<Card p={6} rounded="xl" shadow="md">
					<Heading fontSize="4xl" fontWeight="bolder" color={"#01377D"}>
						500+
					</Heading>
					<Text>Pesanan Terlaksana</Text>
				</Card>

				<Card p={6} rounded="xl" shadow="md">
					<Heading fontSize="4xl" fontWeight="bolder" color={"#01377D"}>
						350+
					</Heading>
					<Text>Driver Terdaftar</Text>
				</Card>

				<Card p={6} rounded="xl" shadow="md">
					<HStack justify="center" mb={2} color={"#01377D"} fontSize={"3xl"}>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaRegStar />
					</HStack>
					<Text>Kepuasan Pelanggan</Text>
				</Card>
			</SimpleGrid>
		</Box>
	);
}

export default AboutSection;
