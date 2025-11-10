import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Flex,
	Heading,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function HelpPage() {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Container maxW="80vw" py={12}>
			<Stack
				spacing={12}
				direction={{ base: "column", md: "row" }}
				align="start"
			>
				<Box flex={1}>
					<Heading size="lg" mb={6}>
						Butuh Bantuan?
					</Heading>

					<Stack spacing={6}>
						<Flex align="center" gap={4} bg="#BCE7D3" p={6} rounded={5}>
							<MdOutlineEmail fontSize={40} />
							<Box>
								<Text fontSize="lg" fontWeight="bold">
									Email
								</Text>
								<Text color="gray.600">info@trashup.com</Text>
							</Box>
						</Flex>

						<Flex align="center" gap={4} bg="#BCE7D3" p={6} rounded={5}>
							<IoCallOutline fontSize={40} />
							<Box>
								<Text fontSize="lg" fontWeight="bold">
									Telepon
								</Text>
								<Text color="gray.600">(123) 456-7890</Text>
							</Box>
						</Flex>
					</Stack>
				</Box>

				<Box flex={2}>
					<Accordion allowToggle defaultIndex={[0]}>
						{faqList.map((faq, i) => (
							<AccordionItem key={i}>
								<h2>
									<AccordionButton py={4}>
										<Box
											as="span"
											flex="1"
											textAlign="left"
											fontWeight="semibold"
										>
											{faq.question}
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} fontSize="md" textAlign={"justify"}>
									{faq.answer}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Box>
			</Stack>
		</Container>
	);
}

const faqList = [
	{
		question: "Apa itu TrashUp?",
		answer:
			"TrashUp adalah platform layanan pengelolaan sampah berbasis digital yang fokus pada penjemputan sampah rumah tangga di Kota Samarinda.",
	},
	{
		question: "Sampah apa yang bisa diangkut TrashUp?",
		answer:
			"TrashUp menerima sampah non-B3 seperti sampah rumah tangga, plastik, organik, dan kertas yang sudah dikemas rapi.",
	},
	{
		question: "Apakah layanan TrashUp berbayar?",
		answer:
			"Saat ini layanan TrashUp tersedia secara gratis di beberapa area tertentu selama masa uji coba, akan tetapi kedepannya akan dikenakan tarif berbayar yang tentunya tidak akan membebani pengguna TrashUp",
	},
	{
		question: "Apakah layanan tersedia 24 jam?",
		answer:
			"Ya. TrashUp beroperasi 24 jam setiap hari, asalkan ada driver yang standby untuk melayani pengguna, TrashUp selalu siap menjadi solusi permasalahan sampah anda",
	},
	{
		question: "Bagaimana saya bisa menjadi driver TrashUp?",
		answer:
			"Anda bisa mendaftar dengan menghubungi kami dengan nomor Whatsapp yang tersedia atau hubungi kami melalui email.",
	},
	{
		question: "Apakah TrashUp tersedia di semua kota?",
		answer:
			"Saat ini layanan hanya tersedia di Kota Samarinda dan akan diperluas bertahap ke kota lain.",
	},
	{
		question: "Apakah harus memilah sampah terlebih dahulu?",
		answer:
			"Ya, pengguna disarankan untuk memilah sampah organik dan anorganik sebelum dijemput untuk pengenaan tarif yang lebih efisien",
	},
];

export default HelpPage;
