import {
	AspectRatio,
	Box,
	Button,
	Container,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	Select,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { CiClock1 } from "react-icons/ci";
import { PiHouse } from "react-icons/pi";
import { Link } from "react-router-dom";

function OrderPage() {
	const buttonBg = useColorModeValue("#26B170", "blue.600");
	const buttonHover = useColorModeValue("green.600", "blue.500");

	return (
		<Container maxW="80vw" py={10}>
			<Stack direction={{ base: "column", md: "row" }} spacing={10}>
				<Box flex={1}>
					<Heading
						fontSize={{ base: "2xl", md: "4xl" }}
						color="#26B170"
						fontWeight="bold"
						mb={6}
					>
						Pilih tempatmu untuk diangkut sampahnya
					</Heading>

					<Stack spacing={4}>
						<Box>
							<Text mb={1}>Pilih Jenis Sampah:</Text>
							<Select
								border="2px solid #26B170"
								placeholder="Jenis Sampah"
								w="full"
							>
								<option value="ringan">Sampah Ringan</option>
								<option value="berat">Sampah Berat</option>
							</Select>
						</Box>

						<Box>
							<Text mb={1}>Tanggal Penjemputan:</Text>
							<Input type="date" border="2px solid #26B170" w="full" />
						</Box>

						<Box>
							<Text mb={1}>Waktu Penjemputan:</Text>
							<Input type="time" border="2px solid #26B170" w="full" />
						</Box>

						<Box mt={6} p={4} border="1px solid #e2e8f0" borderRadius="md">
							<Text fontSize="lg" fontWeight="bold" mb={3}>
								Rincian Harga
							</Text>

							<HStack justify="space-between">
								<Text>Harga Sampah</Text>
								<Text>Rp. 20.000</Text>
							</HStack>
							<HStack justify="space-between">
								<Text>Ongkos Kirim</Text>
								<Text>Rp. 8.000</Text>
							</HStack>
							<HStack
								justify="space-between"
								borderTop="1px solid gray"
								pt={2}
								mt={2}
							>
								<Text fontWeight="bold">Total</Text>
								<Text fontWeight="bold">Rp. 28.000</Text>
							</HStack>

							<HStack mt={3}>
								<CiClock1 />
								<Text fontSize="sm" color="gray.600">
									Estimasi waktu penjemputan: 5 - 10 menit
								</Text>
							</HStack>
						</Box>
					</Stack>
				</Box>

				<Box flex={1}>
					<AspectRatio ratio={4 / 3} w="full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63834.64812837849!2d117.09113232595386!3d-0.5014661703605616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f9e3a5b4857%3A0xd9d9678dade6eae3!2sSamarinda%2C%20Kota%20Samarinda%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1749853739905!5m2!1sid!2sid"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Maps"
						/>
					</AspectRatio>

					<Stack spacing={3}>
						<Box>
							<Text mb={1}>Lokasi Pengambilan:</Text>
							<InputGroup>
								<InputRightElement pointerEvents="none">
									<PiHouse />
								</InputRightElement>
								<Input
									border="2px solid #26B170"
									type="text"
									placeholder="Contoh: Jl. Perjuangan No. 7"
								/>
							</InputGroup>
						</Box>

						<Link to={"/driver"}>
							<Button
								bg={buttonBg}
								_hover={{ bg: buttonHover }}
								color="white"
								w="full"
							>
								Pesan Sekarang
							</Button>
						</Link>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}

export default OrderPage;
