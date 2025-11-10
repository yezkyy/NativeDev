import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	Button,
	Divider,
	useColorModeValue,
	HStack,
	IconButton,
	AspectRatio,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaComments, FaTimes } from "react-icons/fa";

function DriverPage() {
	const bgLeft = useColorModeValue("white", "gray.800");
	const bgMiddle = useColorModeValue("gray.50", "gray.700");
	const bgRight = useColorModeValue("white", "gray.800");
	const cardBg = useColorModeValue("white", "gray.700");
	const textColor = useColorModeValue("gray.800", "gray.100");
	const mutedText = useColorModeValue("gray.500", "gray.400");

	return (
		<Container w="full" maxW="100vw" p={0} m={0} overflow={"hidden"}>
			<Flex w="100vw" minH="100vh" direction={{ base: "column", lg: "row" }}>
				<Box
					w={{ base: "100%", lg: "20vw" }}
					p={6}
					bg={bgLeft}
					order={{ base: 1, lg: 1 }}
				>
					<Stack align="center" spacing={4}>
						<Image
							borderRadius="full"
							boxSize="120px"
							src="https://bit.ly/dan-abramov"
							alt="Driver Profile"
						/>
						<Heading fontSize="xl" color={textColor}>
							Dan Abramov
						</Heading>
						<Text fontSize="sm" color={mutedText}>
							danabramov@gmail.com
						</Text>
						<Text
							bg="green.400"
							color="white"
							px={4}
							py={1}
							borderRadius="md"
							fontWeight="semibold"
							fontSize="sm"
						>
							Pemasukan: Rp 50.000 / hari
						</Text>
						<HStack spacing={8}>
							<Box textAlign="center">
								<Text fontSize="xl" fontWeight="bold">
									78
								</Text>
								<Text fontSize="sm" color={mutedText}>
									Order
								</Text>
							</Box>
							<Box textAlign="center">
								<Text fontSize="xl" fontWeight="bold">
									5
								</Text>
								<Text fontSize="sm" color={mutedText}>
									Bulan
								</Text>
							</Box>
						</HStack>
						<Divider />
						<Stack spacing={2} w="full" mt={4}>
							<Button variant="ghost" colorScheme="green">
								Lokasi
							</Button>
							<Button variant="ghost">Pendapatan</Button>
							<Button variant="ghost">Pengaturan</Button>
						</Stack>
					</Stack>
				</Box>

				<Box
					w={{ base: "100%", lg: "60vw" }}
					bg={bgMiddle}
					order={{ base: 2, lg: 2 }}
				>
					<AspectRatio
						ratio={4 / 3}
						w="full"
						minH={{ base: "300px", lg: "100vh" }}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63834.64812837849!2d117.09113232595386!3d-0.5014661703605616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f9e3a5b4857%3A0xd9d9678dade6eae3!2sSamarinda%2C%20Kota%20Samarinda%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1749853739905!5m2!1sid!2sid"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Maps"
						/>
					</AspectRatio>
				</Box>

				<Box
					w={{ base: "100%", lg: "20vw" }}
					p={6}
					bg={bgRight}
					order={{ base: 3, lg: 3 }}
				>
					<Stack spacing={4}>
						<Text fontWeight="bold" fontSize="lg" color={textColor}>
							Pesan
						</Text>
						<Box bg={cardBg} p={3} borderRadius="md">
							<Stack spacing={1}>
								<HStack justify="space-between">
									<Text fontWeight="semibold">Sutiati</Text>
									<Text fontSize="xs" color="green.400">
										Online
									</Text>
								</HStack>
								<Text fontSize="sm">Saya tunggu ya kak</Text>
								<Text
									alignSelf="flex-end"
									fontSize="sm"
									color="white"
									bg="blue.400"
									px={3}
									py={1}
									borderRadius="xl"
									w="fit-content"
								>
									Baik, ditunggu ya
								</Text>
							</Stack>
						</Box>

						<Stack direction="row" spacing={2}>
							<Button size="sm" variant="outline" colorScheme="gray">
								OK
							</Button>
							<Button size="sm" variant="outline" colorScheme="gray">
								Ditunggu
							</Button>
						</Stack>

						<HStack spacing={4} justify="center">
							<IconButton icon={<FaComments />} colorScheme="green" />
							<IconButton icon={<FaPhoneAlt />} colorScheme="blue" />
							<IconButton icon={<FaTimes />} colorScheme="red" />
						</HStack>

						<Box bg={cardBg} p={3} borderRadius="md">
							<Text fontWeight="bold" mb={1} color={textColor}>
								Informasi Destinasi
							</Text>
							<Text fontSize="sm" color={mutedText}>
								Lokasi Pengambilan: <strong>Jl. Anggur</strong>
							</Text>
							<Text fontSize="sm" color={mutedText}>
								Lokasi Pembuangan: <strong>TPU Jl. Pramuka</strong>
							</Text>
						</Box>

						<Box bg={cardBg} p={3} borderRadius="md">
							<Text fontWeight="bold" mb={1} color={textColor}>
								Total Pembayaran
							</Text>
							<Text>
								Total Harga: <strong>Rp 28.000</strong>
							</Text>
							<Text>
								Metode: <strong>Cash</strong>
							</Text>
							<Text color="green.400" fontWeight="semibold">
								Status: Berhasil
							</Text>
						</Box>

						<Button colorScheme="green" size="md">
							Menerima Pesanan
						</Button>
					</Stack>
				</Box>
			</Flex>
		</Container>
	);
}

export default DriverPage;
