import {
	Box,
	Card,
	Heading,
	HStack,
	SimpleGrid,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

function TrashTypeSection() {
	return (
		<Box mt={28} px={{ base: 4, md: 16 }}>
			<Heading textAlign="center" size="2xl" mb={12}>
				Jenis Sampah
			</Heading>

			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={6}
				justifyItems="center"
			>
				<Card
					w="full"
					maxW="md"
					p={6}
					bg={useColorModeValue("#26B170", "blue.500")}
					color="white"
					rounded="xl"
					boxShadow="md"
				>
					<Heading fontSize="xl" fontWeight="bold" mb={2}>
						Sampah Ringan
					</Heading>
					<Text mb={4}>
						Sampah ringan merupakan sampah organik (plastik, koran, dan kertas)
					</Text>
					<HStack>
						<Text>Rp.</Text>
						<Text fontSize={24}>10.000</Text>
					</HStack>
				</Card>

				<Card
					w="full"
					maxW="md"
					p={6}
					bg={useColorModeValue("#26B170", "blue.500")}
					color="white"
					rounded="xl"
					boxShadow="md"
				>
					<Heading fontSize="xl" fontWeight="bold" mb={2}>
						Sampah Berat
					</Heading>
					<Text mb={4}>
						Sampah berat merupakan sampah anorganik (kayu, logam, dan kaca)
					</Text>
					<HStack>
						<Text>Rp.</Text>
						<Text fontSize={24}>20.000</Text>
					</HStack>
				</Card>
			</SimpleGrid>
		</Box>
	);
}

export default TrashTypeSection;
