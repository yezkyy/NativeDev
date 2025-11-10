import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function JoinUsSection() {
	return (
		<Box
			mt={20}
			textAlign="center"
			bg="#26B170"
			color="white"
			rounded={16}
			px={{ base: 6, md: 16 }}
			py={{ base: 12, md: 16 }}
			maxW="6xl"
			mx="auto"
		>
			<Stack spacing={10}>
				<Heading fontWeight="bold" fontSize={{ base: "2xl", md: "4xl" }}>
					Ingin Menjadi Bagian dari Driver Kami?
				</Heading>
				<Text
					fontWeight="light"
					fontSize={{ base: "md", md: "lg" }}
					px={{ base: 0, md: 24 }}
				>
					Bergabung sebagai driver TrashUp berarti menjadi bagian dari solusi
					nyata untuk lingkungan. Kamu bisa mendapatkan penghasilan tambahan
					dengan waktu yang fleksibel, sambil membantu masyarakat membuang
					sampah secara lebih mudah dan bertanggung jawab. Dengan sistem yang
					simpel dan dukungan komunitas, kamu bisa bekerja dengan nyaman dan
					berdampak besar.
				</Text>
				<Button
					leftIcon={<FaWhatsapp />}
					colorScheme="white"
					variant="outline"
					borderColor="white"
					_hover={{ bg: "whiteAlpha.300" }}
					maxW="fit-content"
					mx="auto"
					size={{ base: "md", md: "lg" }}
				>
					Daftar Sekarang
				</Button>
			</Stack>
		</Box>
	);
}

export default JoinUsSection;
