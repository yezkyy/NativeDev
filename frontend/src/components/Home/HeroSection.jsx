import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Select,
	Stack,
	Text,
	useColorModeValue,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import { PiHouse } from "react-icons/pi";
import { Link } from "react-router-dom";
import heroImage from "../../assets/image/hero-image.png";

function HeroSection() {
	const flexDirection = useBreakpointValue({ base: "column", md: "row" });
	const textAlign = useBreakpointValue({ base: "center", md: "left" });

	return (
		<Flex
			direction={flexDirection}
			gap={{ base: 8, md: 16 }}
			mt={{ base: 8, md: 12 }}
			align="center"
			px={{ base: 4, md: 8 }}
		>
			<Box w={{ base: "100%", md: "50%" }}>
				<VStack align={textAlign} spacing={4}>
					<Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bolder">
						Waktunya{" "}
						<Text as="span" color="#26B170">
							Trash
						</Text>
						<Text as="span" color="blue.400">
							Up
						</Text>{" "}
						Lingkunganmu!
					</Text>
				</VStack>

				<Text
					fontSize={{ base: "sm", md: "md" }}
					fontWeight="normal"
					textAlign={textAlign}
					mt={2}
				>
					Pengambilan sampah sesuai permintaan Anda. Pembuangan yang cepat,
					fleksibel, dan ramah lingkungan bagi penduduk perkotaan.
				</Text>

				<Stack mt={8} spacing={4}>
					<InputGroup>
						<InputRightElement pointerEvents="none">
							<PiHouse />
						</InputRightElement>
						<Input
							border="2px solid #26B170"
							type="tel"
							placeholder="Lokasi Pengambilan"
						/>
					</InputGroup>
					<Select border="2px solid #26B170" placeholder="Jenis Sampah">
						<option value="ringan">Sampah Ringan</option>
						<option value="berat">Sampah Berat</option>
					</Select>
					<Flex gap={4} direction={{ base: "column", sm: "row" }}>
						<Input
							border="2px solid #26B170"
							placeholder="Select Date"
							size="md"
							type="date"
						/>
						<Input
							border="2px solid #26B170"
							placeholder="Select Time"
							size="md"
							type="time"
						/>
					</Flex>
					<Flex alignItems="center" gap={4} wrap="wrap">
						<Button
							bg={useColorModeValue("#26B170", "blue.600")}
							_hover={{ bg: useColorModeValue("green.600", "blue.500") }}
							color="white"
						>
							Pesan
						</Button>
						<Text textDecor="underline" fontSize="sm">
							<Link to="">Log in untuk melihat aktivitas anda</Link>
						</Text>
					</Flex>
				</Stack>
			</Box>

			<Box w={{ base: "100%", md: "50%" }} textAlign="center">
				<Image
					src={heroImage}
					alt="Hero Image"
					rounded={20}
					w={{ base: "80%", md: "100%" }}
					mx="auto"
				/>
			</Box>
		</Flex>
	);
}

export default HeroSection;
