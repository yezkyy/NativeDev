import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import bgImage from "../assets/image/driver-client.png";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { FaSquareCheck } from "react-icons/fa6";

function AboutPage() {
	return (
		<Container maxW="full" p={0}>
			<Box
				position="relative"
				backgroundImage={`url(${bgImage})`}
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				minH="100vh"
			>
				<Box position="absolute" inset={0} bg="rgba(0, 0, 0, 0.5)" />

				<Flex
					position="relative"
					minH="100vh"
					zIndex={1}
					justify="center"
					align="center"
					textAlign="center"
				>
					<Heading
						color="white"
						fontSize={{ base: "3xl", md: "5xl" }}
						fontWeight="bold"
					>
						Tentang Kami
					</Heading>
				</Flex>
			</Box>

			<Container maxW="80vw" mt={16} mb={24}>
				<Box>
					<Heading size="xl">
						Apa itu{" "}
						<Text as="span" color="#26B170">
							Trash
						</Text>
						<Text as="span" color="#008DBC">
							Up?
						</Text>
					</Heading>

					<Stack spacing={6} mt={8} fontSize="lg" textAlign={"justify"}>
						<Text>
							TrashUp adalah sebuah platform layanan pengelolaan sampah berbasis
							digital yang berfokus pada penjemputan sampah dari rumah ke rumah
							di wilayah Kota Samarinda, Kalimantan Timur.
						</Text>
						<Text>
							Lahir dari keresahan akan kurangnya solusi praktis dan
							terorganisir untuk pengelolaan sampah rumah tangga, TrashUp hadir
							dengan tujuan untuk mengatasi tantangan tersebut melalui
							pendekatan teknologi, sosial, dan lingkungan.
						</Text>
					</Stack>
				</Box>

				<Box mt={20}>
					<HStack spacing={4}>
						<PiCheckSquareOffsetFill fontSize={44} color="#008DBC" />
						<Heading size="lg">Visi</Heading>
					</HStack>
					<Text mt={4} fontSize="lg" textAlign={"justify"}>
						Menjadi platform layanan pengelolaan sampah berbasis teknologi yang
						terdepan dan terpercaya di Kota Samarinda, dengan memberdayakan
						masyarakat, mendukung program pemerintah, dan menciptakan lingkungan
						yang bersih, sehat, dan berkelanjutan.
					</Text>
				</Box>

				<Box mt={20}>
					<HStack spacing={4}>
						<FaSquareCheck fontSize={38} color="#26B170" />
						<Heading size="lg">Misi</Heading>
					</HStack>
					<UnorderedList
						spacing={6}
						mt={4}
						fontSize="lg"
						pl={4}
						textAlign={"justify"}
					>
						<ListItem>
							Memberikan layanan penjemputan sampah yang cepat, mudah, dan
							fleksibel melalui platform digital berbasis web, guna menjawab
							kebutuhan masyarakat urban akan pengelolaan sampah rumah tangga
							yang efisien.
						</ListItem>
						<ListItem>
							Memberdayakan masyarakat lokal sebagai bagian dari solusi, dengan
							membuka peluang kerja sebagai petugas pengangkut sampah yang
							dilatih dan dikelola secara profesional.
						</ListItem>
						<ListItem>
							Menerapkan teknologi Smart E-Government yang terintegrasi dengan
							sistem pelayanan publik berbasis data, untuk mendukung kinerja
							pemerintah dalam pengelolaan sampah.
						</ListItem>
						<ListItem>
							Mendorong perilaku hidup bersih dan tanggung jawab lingkungan,
							melalui pendekatan edukatif dan human-centered design agar
							masyarakat lebih sadar akan pentingnya pemilahan dan penanganan
							sampah.
						</ListItem>
						<ListItem>
							Membangun kolaborasi dengan pemerintah, komunitas, dan pelaku
							industri daur ulang, demi menciptakan ekosistem pengelolaan sampah
							yang inklusif, berkelanjutan, dan berdampak nyata bagi kota
							Samarinda.
						</ListItem>
					</UnorderedList>
				</Box>
			</Container>
		</Container>
	);
}

export default AboutPage;
